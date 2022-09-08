class Api::ContractorsController < ApplicationController

# post '/api/signup_as_contractor'

    def create
        contractor = Contractor.create(user_params)
        if contractor.valid?
            session[:user_id] = contractor.id
            render json: contractor, status: :ok
        else
            render json: { error: contractor.errors }, status: :unprocessable_entity
        end
    end

  private

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :password_confirmation)
    end
end
