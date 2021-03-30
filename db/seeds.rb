# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.create( email: "jack", password: "daniels")
# MoviesGenre.delete_all()
# Movie.delete_all()
# Genre.delete_all()

#  Make Genres
g1 = Genre.create(name: "Action")
g2 = Genre.create(name: "Adventure")
g3 = Genre.create(name: "Comic Book")
g4 = Genre.create(name: "Thriller")
g5 = Genre.create(name: "Biography")
g6 = Genre.create(name: "Drama")
g7 = Genre.create(name: "Comedy")
g8 = Genre.create(name: "Superhero")
g9 = Genre.create(name: "Animation")
g10 = Genre.create(name: "Crime")

## BatmanBegins
picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/BatmanBeginsImage.webp')
trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/BatmanBeginsTrailer.mp4')
media = trailer
begin
    m1 = Movie.create(title: "Batman Begins", cast:"Christian Bale, Liam Neeson, Micheal Caine", director:"Christopher Nolan",summary:"After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.", year: 2005, duration: 2.20)

    m1.movies_genres.create(genre: g1)
    m1.movies_genres.create(genre: g2)
    m1.movies_genres.create(genre: g3)
    m1.movies_genres.create(genre: g4)
    m1.movies_genres.create(genre: g8)


    m1.picture.attach(io: picture, filename: 'BatmanBeginsImage.webp')
    m1.trailer.attach(io: trailer, filename: 'BatmanBeginsTrailer.mp4')
    m1.media = m1.trailer # does nothing, not holding actual media, for future use
rescue => exception
    
end



#
#
#


## FreeStateOfJones
picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/FreeStateOfJonesImage.webp')
trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/FreeStateOfJonesTrailer.mp4')
media = trailer
begin
    m2 = Movie.create!(title: "Free State of Jones", cast:"Matthew McConaughey, Gugu Mbatha-Raw, Mahershala Ali", director:"Gary Ross",summary:"A disillusioned Confederate army deserter returns to Mississippi and leads a militia of fellow deserters and women in an uprising against the corrupt local Confederate government.", year: 2016, duration: 2.20)

    m2.movies_genres.create(genre: g1)
    m2.movies_genres.create(genre: g5)
    m2.movies_genres.create(genre: g6)
    
    m2.picture.attach(io: picture, filename: 'FreeStateOfJonesImage.webp')
    m2.trailer.attach(io: trailer, filename: 'FreeStateOfJonesTrailer.mp4')
    m2.media = m2.trailer # does nothing, not holding actual media, for future use
rescue => exception
    
end 


#
#
#


## Mank
picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/MankImage.webp')
trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/MankTrailer.mp4')
media = trailer
begin
    m3 = Movie.create(title: "Mank", cast:"Gary Oldman, Amanda Seyfried, Lily Collins", director:"David Fincher",summary:"1930's Hollywood is reevaluated through the eyes of scathing social critic and alcoholic screenwriter Herman J. Mankiewicz as he races to finish the screenplay of Citizen Kane (1941).", year: 2020, duration: 2.11)
    
    m3.movies_genres.create(genre: g5)
    m3.movies_genres.create(genre: g7)
    m3.movies_genres.create(genre: g6)
    
    m3.picture.attach(io: picture, filename: 'MankImage.webp')
    m3.trailer.attach(io: trailer, filename: 'MankTrailer.mp4')
    m3.media = m1.trailer # does nothing, not holding actual media, for future use
    
rescue => exception
    
end


#
#
#


## Peppermint
picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/PeppermintImage.webp')
trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/PeppermintTrailer.mp4')
media = trailer
begin
    m3 = Movie.create(title: "Peppermint", cast:"Jennifer Garner, John Gallagher Jr., John Ortiz", director:"Pierre Morel",summary:"Five years after her husband and daughter are killed in a senseless act of violence, a woman comes back from self-imposed exile to seek revenge against those responsible and the system that let them go free.", year: 2018, duration: 1.41)
    
    m3.movies_genres.create(genre: g1)
    m3.movies_genres.create(genre: g6)
    m3.movies_genres.create(genre: g4)
    
    m3.picture.attach(io: picture, filename: 'PeppermintImage.webp')
    m3.trailer.attach(io: trailer, filename: 'PeppermintTrailer.mp4')
    m3.media = m3.trailer # does nothing, not holding actual media, for future use
    
rescue => exception
    
end


#
#
#


## Rango
picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/RangoImage.webp')
trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/RangoTrailer.mp4')
media = trailer
begin
    
    m4 = Movie.create(title: "Rango", cast:"Johnny Depp, Isla Fisher, Timothy Olyphant", director:"Gore Verbinski",summary:"Rango is an ordinary chameleon who accidentally winds up in the town of Dirt, a lawless outpost in the Wild West in desperate need of a new sheriff.", year: 2011, duration: 1.47)
    m4.movies_genres.create(genre: g9)
    m4.movies_genres.create(genre: g2)
    m4.movies_genres.create(genre: g7)
    
    m4.picture.attach(io: picture, filename: 'RangoImage.webp')
    m4.trailer.attach(io: trailer, filename: 'RangoTrailer.mp4')
    m4.media = m4.trailer # does nothing, not holding actual media, for future use
rescue => exception
    
end


#
#
#


## Shadow
picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/ShadowImage.webp')
trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/ShadowTrailer.mp4')
media = trailer
begin
    
    m5 = Movie.create(title: "Shadow", cast:"Chao Deng, Li Sun, Ryan Zheng ", director:"Yimou Zhang",summary:"Life and intrigue in an ancient Chinese court.", year: 2018, duration:1.56 )
    m5.movies_genres.create(genre: g1)
    m5.movies_genres.create(genre: g2)
    m5.movies_genres.create(genre: g6)
    
    m5.picture.attach(io: picture, filename: 'ShadowImage.webp')
    m5.trailer.attach(io: trailer, filename: 'ShadowTrailer.mp4')
    m5.media = m5.trailer # does nothing, not holding actual media, for future use
rescue => exception
    
end


#
#
#


## Snowden
picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/SnowdenImage.jpg')
trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/SnowdenTrailer.mp4')
media = trailer
begin
    
    m6 = Movie.create(title: "Snowden", cast:"Joseph Gordon-Levitt, Shailene Woodley, Melissa Leo ", director:"Oliver Stone",summary:"The NSA's illegal surveillance techniques are leaked to the public by one of the agency's employees, Edward Snowden, in the form of thousands of classified documents distributed to the press.", year:2016 , duration:2.14 )
    m6.movies_genres.create(genre: g5)
    m6.movies_genres.create(genre: g10)
    m6.movies_genres.create(genre: g6)
    
    m6.picture.attach(io: picture, filename: 'SnowdenImage.jpg')
    m6.trailer.attach(io: trailer, filename: 'SnowdenTrailer.mp4')
    m6.media = m6.trailer # does nothing, not holding actual media, for future use
rescue => exception
    
end

#
#
#

## Spotlight
picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/SpotlightImage.webp')
trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/SpotlightTrailer.mp4')
media = trailer
begin
    m7 = Movie.create(title: "Spotlight", cast:"Mark Ruffalo, Michael Keaton, Rachel McAdams", director:"Tom McCarthy",summary:"The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.", year:2015 , duration:2.09 )
    m7.movies_genres.create(genre: g5)
    m7.movies_genres.create(genre: g10)
    m7.movies_genres.create(genre: g6)
    
    m7.picture.attach(io: picture, filename: 'SpotlightImage.webp')
    m7.trailer.attach(io: trailer, filename: 'SpotlightTrailer.mp4')
    m7.media = m7.trailer # does nothing, not holding actual media, for future use
    
rescue => exception
    
end


#
#
#


## The Dark Knight
picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/TheDarkKnightImage.jpg')
trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/TheDarkKnightTrailer.mp4')
media = trailer
begin
    m8 = Movie.create(title: "The Dark Knight", cast: "Christian Bale, Heath Ledger, Aaron Eckhart", director:"Christopher Nolan",summary:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", year:2008, duration:2.32 )
    m8.movies_genres.create(genre: g1)
    m8.movies_genres.create(genre: g10)
    m8.movies_genres.create(genre: g6)
    
    m8.picture.attach(io: picture, filename: 'TheDarkKnightImage.jpg')
    m8.trailer.attach(io: trailer, filename: 'TheDarkKnightTrailer.mp4')
    m8.media = m8.trailer # does nothing, not holding actual media, for future use
    
rescue => exception
    
end


#
#
#


## The Departed
picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/TheDepartedImage.jpg')
trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/TheDepartedTrailer.mp4')
media = trailer
begin
    m9 = Movie.create(title: "The Departed", cast:"Leonardo DiCaprio, Matt Damon, Jack Nicholson", director:"Martin Scorsese",summary:"An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.", year: 2006 , duration:2.31 )
    m9.movies_genres.create(genre: g10)
    m9.movies_genres.create(genre: g6)
    m9.movies_genres.create(genre: g4)
    
    m9.picture.attach(io: picture, filename: 'TheDepartedImage.jpg')
    m9.trailer.attach(io: trailer, filename: 'TheDepartedTrailer.mp4')
    m9.media = m9.trailer # does nothing, not holding actual media, for future use
    
rescue => exception
    
end


#
#
#


## The Irishman
picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/TheIrishmanImage.webp')
trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/TheIrishmanTrailer.mp4')
media = trailer
begin
    m10 = Movie.create(title: "The Irishman", cast:"Robert De Niro, Al Pacino, Joe Pesci", director:"Martin Scorsese",summary:"An old man recalls his time painting houses for his friend, Jimmy Hoffa, through the 1950-70s.", year: 2019 , duration: 3.29)
    m10.movies_genres.create(genre: g5)
    m10.movies_genres.create(genre: g10)
    m10.movies_genres.create(genre: g6)
    
    m10.picture.attach(io: picture, filename: 'TheIrishmanImage.webp')
    m10.trailer.attach(io: trailer, filename: 'TheIrishmanTrailer.mp4')
    m10.media = m10.trailer # does nothing, not holding actual media, for future use
    
rescue => exception
    
end


#
#
#


## War Dogs
picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/WarDogsImage.webp')
trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/WarDogsTrailer.mp4')
media = trailer
begin
    m11 = Movie.create(title: "War Dogs", cast:"Jonah Hill, Miles Teller, Steve Lantz", director:"",summary:"Loosely based on the true story of two young men, David Packouz and Efraim Diveroli, who won a three hundred million dollar contract from the Pentagon to arm America's allies in Afghanistan.", year: 2016 , duration:1.54 )
    m11.movies_genres.create(genre: g5)
    m11.movies_genres.create(genre: g7)
    m11.movies_genres.create(genre: g10)
    
    m11.picture.attach(io: picture, filename: 'WarDogsImage.webp')
    m11.trailer.attach(io: trailer, filename: 'WarDogsTrailer.mp4')
    m11.media = m11.trailer # does nothing, not holding actual media, for future use
    
rescue => exception
    
end



#
#
#


# picture = File.open('../data/Rango/RangoImage.webp')
# trailer = File.open('../data/Rango/RangoTrailer.mp4')
# media = trailer
# m5 = Movie.create(title: "Rango", cast:"", director:"",summary:" ", year: , duration: )
# m5.movies_genres.create(genre: g9)
# m5.movies_genres.create(genre: g2)
# m5.movies_genres.create(genre: g7)

# m5.picture.attach(io: picture, filename: 'RangoImage.webp')
# m5.trailer.attach(io: trailer, filename: 'RangoTrailer.mp4')
# m5.media = m5.trailer # does nothing, not holding actual media, for future use
