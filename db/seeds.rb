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
    name:'Burger King',
    lat: 34.019624,
    lng: -118.469863,
    description: "Most famous for being McDonalds' Fastfood rival.  Offers amazing Strawberry Milkshakes",
    picture_url: "https://www.gettyimages.com/detail/photo/sign-of-burger-king-in-liverpool-royalty-free-image/458712729?adppopup=true"
)
b2=Business.create!(
    name:'McDonalds',
    picture_url:"https://lh5.googleusercontent.com/p/AF1QipO-46xdL8P2H3eeNp4HkrckjWAwgXnuBtL3sJ7F=w426-h240-k-no",
    description: "Fastfood restaurant serving american burgers and fries",
    lat:40.5775559,
    lng:-74.10240269999997
)
# b3=Business.create!(
#     name:'Dairy King'
# )

# b3=Business.create!(
#     name:"Tom's hardware"
# )

# b4=Business.create!(
#     name:'Rodgers Burgers'
# )

# b5=Business.create!(
#     name:'Candy Shop'
# )

# b6=Business.create!(
#     name:'Apples Bar'
# )

# b7=Business.create!(
#     name:'Barneys Beanery'
# )

# b8=Business.create!(
#     name:'Ericks Eels '
# )

# b9=Business.create!(
#     name:'Funky Grill'
# )

# b10=Business.create!(
#     name:'Grapes shop'
# )


# b12=Business.create!(
#     name:'I Love Pizza'

# )

# b13=Business.create!(
#     name:'Jamba Juice'
# )

# b14=Business.create!(
#     name:'Krazy Kangaroos'
# )

# b15=Business.create!(
#     name:'Lemon Shop'
# )



Review.create(author_id: u1.id, business_id:  b1.id, body: "very good service", rating: 2)
Review.create(author_id: u2.id, business_id:  b2.id, body: "its okay", rating: 3)
