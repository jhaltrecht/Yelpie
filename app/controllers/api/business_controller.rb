  def show
    @business = Business.find(params[:id])
  end