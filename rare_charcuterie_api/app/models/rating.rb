class Rating < ApplicationRecord
    belongs_to :item, foreign_key: :item_id
end
