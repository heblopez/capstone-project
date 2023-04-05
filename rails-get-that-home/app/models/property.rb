class Property < ApplicationRecord
  validates :address, presence: true
  validates :type_operation, presence: true
  validates :type_property, presence: true
  validates :bedrooms, presence: true
  validates :bathrooms, presence: true
  validates :area, presence: true

  enum type_operation: { rent: 0, sale: 1 }
  enum type_property: { apartment: 0, house: 1 }

end
