class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate_request, only: [:create]

  def create
  end
end
