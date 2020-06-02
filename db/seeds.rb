# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Review.delete_all
Business.delete_all

u1 = User.create!(
  username: 'guest',
  password: 'password'
)

u2 = User.create!(
  username: 'guest22',
  password: 'password'
)

b1=Business.create!(
    name:'Burger King'
)
b2=Business.create!(
    name:'McDonalds'
)
b3=Business.create!(
    name:'Dairy King'
)
Review.create(author_id: u1.id, business_id:  b1.id, body: "very good service", rating: 2)
Review.create(author_id: u2.id, business_id:  b2.id, body: "its okay", rating: 3)
