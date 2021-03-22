# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create( email: "jack", password: "daniels")
MoviesGenre.delete_all()
Movie.delete_all()
Genre.delete_all()

#  Make Genres
g1 = Genre.create(name: "Action")
g2 = Genre.create(name: "Adventure")
g3 = Genre.create(name: "Comic Book")
g4 = Genre.create(name: "Thriller")
g5 = Genre.create(name: "Biography")
g6 = Genre.create(name: "Drama")
g7 = Genre.create(name: "Comedy")
g8 = Genre.create(name: "Superhero")

## BatmanBegins
picture = File.open('../data/BatmanBegins/BatmanBeginsImage.webp')
trailer = File.open('../data/BatmanBegins/BatmanBeginsTrailer.mp4')
media = trailer
m1 = Movie.create(title: "Batman Begins", cast:"Christian Bale, Liam Neeson, Micheal Caine", director:"Christopher Nolan",summary:"After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.", year: 2005, duration: 2.20)

m1.movies_genres.create(genre: g1)
m1.movies_genres.create(genre: g2)
m1.movies_genres.create(genre: g3)
m1.movies_genres.create(genre: g4)
m1.movies_genres.create(genre: g5)


m1.picture.attach(io: picture, filename: 'BatmanBeginsImage.webp')
m1.trailer.attach(io: trailer, filename: 'BatmanBeginsTrailer.mp4')
m1.media = m1.trailer # does nothing, not holding actual media, for future use

## FreeStateOfJones
picture = File.open('../data/FreeStateOfJones/FreeStateOfJonesImage.webp')
trailer = File.open('../data/FreeStateOfJones/FreeStateOfJonesTrailer.mp4')
media = trailer
m2 = Movie.create(title: "Free State of Jones", cast:"Matthew McConaughey, Gugu Mbatha-Raw, Mahershala Ali", director:"Gary Ross",summary:"A disillusioned Confederate army deserter returns to Mississippi and leads a militia of fellow deserters and women in an uprising against the corrupt local Confederate government.", year: 2016, duration: 2.20)

m2.movies_genres.create(genre: g1)
m2.movies_genres.create(genre: g5)
m2.movies_genres.create(genre: g6)

m2.picture.attach(io: picture, filename: 'FreeStateOfJonesImage.webp')
m2.trailer.attach(io: trailer, filename: 'FreeStateOfJonesTrailer.mp4')
m2.media = m1.trailer # does nothing, not holding actual media, for future use

## Mank
picture = File.open('../data/Mank/MankImage.webp')
trailer = File.open('../data/Mank/MankTrailer.mp4')
media = trailer
m2 = Movie.create(title: "Mank", cast:"Gary Oldman, Amanda Seyfried, Lily Collins", director:"David Fincher",summary:"1930's Hollywood is reevaluated through the eyes of scathing social critic and alcoholic screenwriter Herman J. Mankiewicz as he races to finish the screenplay of Citizen Kane (1941).", year: 2020, duration: 2.11)

m2.movies_genres.create(genre: g5)
m2.movies_genres.create(genre: g7)
m2.movies_genres.create(genre: g6)

m2.picture.attach(io: picture, filename: 'MankImage.webp')
m2.trailer.attach(io: trailer, filename: 'MankTrailer.mp4')
m2.media = m1.trailer # does nothing, not holding actual media, for future use