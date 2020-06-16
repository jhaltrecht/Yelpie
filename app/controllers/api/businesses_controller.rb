class Api::BusinessesController < ApplicationController

  
  def show
    
    @business = Business.find(params[:id])
    render :show
  end

  def index
    # makes lookup more efficient in view
    
      @businesses = Business.all.includes(:reviews)
    
      render  :index
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