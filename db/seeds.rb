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
    picture_url: "https://cdn.pixabay.com/photo/2014/04/27/14/18/fast-food-333140_1280.jpg"
)
b2=Business.create!(
    name:'McDonalds',
    picture_url:"https://cdn.pixabay.com/photo/2016/11/22/23/23/french-fries-1851143_1280.jpg",
    description: "Fastfood restaurant serving american burgers and fries",
    lat:34.034024,
    lng:-118.473376
)
b3=Business.create!(
     name:'Dairy Queen',
     picture_url: "https://cdn.pixabay.com/photo/2018/05/10/22/42/ice-cream-3389010_1280.jpg",
     description: "Ice Cream Drive Thru",
     lat: 33.655857,
     lng:	-117.999742
 )



 b5=Business.create!(
    name:'Lauries Candy Shop',
     picture_url: "https://cdn.pixabay.com/photo/2013/08/10/18/13/pick-and-mix-171342_1280.jpg",
     description: "Candy shop for young kids",
     lat: 34.006375,
     lng:	-118.223423
 )


 b7=Business.create!(
     name:'Barneys Beanery',
    picture_url: "https://cdn.pixabay.com/photo/2015/09/02/13/26/glasses-919071_1280.jpg",
     description: "Sports bar and restaurant",
     lat: 34.090877,
     lng:	-118.374625
 )

 b12=Business.create!(
     name:'Pizza Hut',
    picture_url: "https://cdn.pixabay.com/photo/2015/11/11/21/03/pizza-1039262_1280.jpg",
     description: "Fastfood Pizza drive-thru",
     lat: 	34.040077,
     lng:-118.46504
 )

 b13=Business.create!(
     name:'Jamba Juice',
    picture_url: "https://cdn.pixabay.com/photo/2017/04/23/09/49/smoothies-2253430_1280.jpg",
     description: "A casual quick restaurant that offers smoothies and Acai Bowls",
     lat: 	34.047466,
     lng:-118.44348
)





Review.create(author_id: u1.id, business_id:  b1.id, body: "very good service", rating: 2)
Review.create(author_id: u2.id, business_id:  b2.id, body: "its okay", rating: 3)
Review.create(author_id: u1.id, business_id:  b5.id, body: "very good options", rating: 2)

