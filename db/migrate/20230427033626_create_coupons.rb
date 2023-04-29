class CreateCoupons < ActiveRecord::Migration[7.0]
  def change
    create_table :coupons do |t|
      t.string :code
      t.boolean :redeemed, default: false
      t.string :client, default: ''

      t.timestamps
    end
  end
end
