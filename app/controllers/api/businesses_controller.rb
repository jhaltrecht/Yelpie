class Api::BusinessesController < ApplicationController

  
  def show
    
    @business = Business.find(params[:id])
    render :show
  end

  def index
    # makes lookup more efficient in view
     businesses = bounds ? Business.in_bounds(bounds) : Business.all
  if params[:name]==""
    businesses=Business.all 
  elsif params[:name] 
      businesses = businesses.where('lower(name) LIKE ?', "#{params[:name].downcase}%")
    end

    @businesses = businesses.includes(:reviews)
    
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

  def bounds
    params[:bounds]
  end


  

end