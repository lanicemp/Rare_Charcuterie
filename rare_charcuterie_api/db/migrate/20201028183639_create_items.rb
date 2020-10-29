class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :ingredient
      t.string :size
      t.string :img_url
      t.integer :price
      t.integer :item_id

      t.timestamps
    end
  end
end
