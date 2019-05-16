class Api::V1::RestaurantsController < ApplicationController
  skip_before_action :authenticate_request, only: [:index, :show]

  def index
    restaurants = Restaurant.all
    render json: restaurants
  end

  def create
    # TODO
  end

  def show
    restaurant = Restaurant.find_by(id: params[:id])
    if restaurant.nil?
      render json: { message: "restaurant does not exist" }, status: :bad_request
    else
      render json: restaurant
    end
  end
end
