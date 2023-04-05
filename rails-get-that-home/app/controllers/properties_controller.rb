class PropertiesController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
      properties = Property.all
      render json: properties, status: :ok
  end

  def create
    property = Property.new(property_params)
    if property.save
      render json: property, status: :created
    else
      respond_unauthorized("Error! the property could not be created")
    end
  end

  def update
    property = Property.find(params[:id])
    if property.update(property_params)
      render json: property, status: :ok
    else
      respond_unauthorized("Error! the property could not be updated")
    end
  end

  def show
    property = Property.find(params[:id])
    if property
      render json: property, status: :ok
    else
      respond_unauthorized("Error! the property could not be found")
    end
  end

  def destroy
    property = Property.find(params[:id])
    if property.destroy
      status: :ok
    else
      respond_unauthorized("Error! the property could not be deleted")
    end
  end

  private

  def property_params
    params.permit(:address, :type_operation, :monthly_rent, :maintanance, :price, :type, :bedrooms, :bathrooms, :area, :pets_allowed, :description)
  end
end
