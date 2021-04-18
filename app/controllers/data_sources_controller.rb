class DataSourcesController < ApplicationController

    def index
        @data_sources = DataSource.where(app_id: params[:app_id])
    end

    def create
        options = params[:options]

        options_to_save = {}
        options.each do |option|

            if option["encrypted"]
                credential = Credential.create(value: option["value"])

                options_to_save[option["key"]] = {
                    credential_id: credential.id,
                    encrypted: option["encrypted"]
                }
            else
                options_to_save[option["key"]] = {
                    value: option["value"],
                    encrypted: option["encrypted"]
                }
            end
        end

        @data_source = DataSource.create(
            name: params[:name],
            kind: params[:kind],
            options: options_to_save,
            app_id: params[:app_id]
        )
    end
    
    def test_connection
        service = DataSourceConnectionService.new params[:kind], params[:options]
        service.process
        render json: { status: 200 }
    rescue StandardError => error
        render json: { error: error }, status: 500
    end

    def authorize_oauth2
        data_source = DataSource.find params[:data_source_id]
        options = CredentialService.new.decrypt_options(data_source.options)
        access_token_url = options["access_token_url"]

        custom_params = options["custom_auth_params"].to_h

        response = HTTParty.post(access_token_url, 
            :body => { :code => params[:code], 
                       :client_id => options["client_id"], 
                       :client_secret => options["client_secret"], 
                       :grant_type => options["grant_type"], 
                       :redirect_uri => "#{ENV.fetch("TOOLJET_HOST")}/oauth2/authorize",
                       **custom_params
            }.to_json,
            :headers => { 'Content-Type' => 'application/json' } )

        result = JSON.parse(response.body)
        access_token = result["access_token"]

        options = { access_token: access_token}

        DataSourceUserOauth2.create(
            user: current_user,
            data_source: data_source, 
            options: options.to_json.to_s
        )

        render json: { success: true }
    end
end
