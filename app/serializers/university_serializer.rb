class UniversitySerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :website, :image_url
end
