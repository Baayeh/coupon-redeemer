class Coupon < ApplicationRecord
  before_validation :set_defaults

  validates :code, presence: true
  validates :code, uniqueness: true

  def set_defaults
    self.client ||= ""
    self.redeemed ||= false
  end
end
