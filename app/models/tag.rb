class Tag < ActiveRecord::Base
  has_many :prototypes, through: :genres
  has_many :genres, foreign_key: 'tag_id'
end
