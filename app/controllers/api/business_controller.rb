class Api::BusinessesController < ApplicationController

  
  def show
    @business = Business.find(params[:id])
  end

  def index
      @businesses = Business.all.includes(:reviews)
      render  "api/businesses/index"
  end
  private 
  def business_params
    params.require(:business).permit(
      :lat,
      :lng,
      :description,
      :name,
      :picture_url
    )
  end

end