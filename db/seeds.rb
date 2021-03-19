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
g5 = Genre.create(name: "Superhero")


picture = File.open('../data/BatmanBegins/BatmanBeginsImage.webp')
trailer = File.open('../data/BatmanBegins/BatmanBeginsTrailer.mp4')
media = trailer
m1 = Movie.create(title: "Batman Begins", cast:"Christian Bale, Liam Neeson, Micheal Caine", director:"Christopher Nolan",summary:"After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.", year: 2005, duration: 2.20)

m1.movies_genres.create(genre: g1)
m1.movies_genres.create(genre: g2)
m1.movies_genres.create(genre: g3)
m1.movies_genres.create(genre: g4)
m1.movies_genres.create(genre: g5)


# m1.picture.attach(io: picture, filename: 'BatmanBeginsImage.webp')
# m1.trailer.attach(io: trailer, filename: 'BatmanBeginsTrailer.mp4')
# m1.media = m1.trailer

