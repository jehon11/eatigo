class Api::V1::AuthenticationController < ApplicationController
  skip_before_action :authenticate_request, only: [:authenticate]

  def authenticate
    command = AuthenticateUser.call(params[:email], params[:password])

    if command.success?
      render json: { auth_token: command.result }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end

  def return_user
    render json: { name: current_user.name, email: current_user.email, admin: current_user.admin }
  end
end
