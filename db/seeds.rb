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
g1 = Genre.find_or_create_by(name: "Action")
g2 = Genre.find_or_create_by(name: "Adventure")
g3 = Genre.find_or_create_by(name: "Comic Book")
g4 = Genre.find_or_create_by(name: "Thriller")
g5 = Genre.find_or_create_by(name: "Biography")
g6 = Genre.find_or_create_by(name: "Drama")
g7 = Genre.find_or_create_by(name: "Comedy")
g8 = Genre.find_or_create_by(name: "Superhero")
g9 = Genre.find_or_create_by(name: "Animation")
g10 = Genre.find_or_create_by(name: "Crime")



## BatmanBegins
    m1 = Movie.find_or_create_by(title: "Batman Begins", cast:"Christian Bale, Liam Neeson, Micheal Caine", director:"Christopher Nolan",summary:"After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.", year: 2005, duration: 2.20)

    m1.movies_genres.find_or_create_by(genre: g1)
    m1.movies_genres.find_or_create_by(genre: g2)
    m1.movies_genres.find_or_create_by(genre: g3)
    m1.movies_genres.find_or_create_by(genre: g4)
    m1.movies_genres.find_or_create_by(genre: g8)

    if( !m1.picture.attached? && !m1.trailer.attached?)
        picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/BatmanBeginsImage.webp')
        trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/BatmanBeginsTrailer.mp4')
        media = trailer
        m1.picture.attach(io: picture, filename: 'BatmanBeginsImage.webp')
        m1.trailer.attach(io: trailer, filename: 'BatmanBeginsTrailer.mp4')
        m1.media = m1.trailer # does nothing, not holding actual media, for future use
    end
#
#
#


## FreeStateOfJones
    m2 = Movie.find_or_create_by(title: "Free State of Jones", cast:"Matthew McConaughey, Gugu Mbatha-Raw, Mahershala Ali", director:"Gary Ross",summary:"A disillusioned Confederate army deserter returns to Mississippi and leads a militia of fellow deserters and women in an uprising against the corrupt local Confederate government.", year: 2016, duration: 2.20)

    m2.movies_genres.find_or_create_by(genre: g1)
    m2.movies_genres.find_or_create_by(genre: g5)
    m2.movies_genres.find_or_create_by(genre: g6)

    if( !m2.picture.attached? && !m2.trailer.attached?)
        picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/FreeStateOfJonesImage.webp')
        trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/FreeStateOfJonesTrailer.mp4')
        media = trailer
        m2.picture.attach(io: picture, filename: 'FreeStateOfJonesImage.webp')
        m2.trailer.attach(io: trailer, filename: 'FreeStateOfJonesTrailer.mp4')
        m2.media = m2.trailer # does nothing, not holding actual media, for future use
    end
#
#
#


## Mank
    m3 = Movie.find_or_create_by(title: "Mank", cast:"Gary Oldman, Amanda Seyfried, Lily Collins", director:"David Fincher",summary:"1930's Hollywood is reevaluated through the eyes of scathing social critic and alcoholic screenwriter Herman J. Mankiewicz as he races to finish the screenplay of Citizen Kane (1941).", year: 2020, duration: 2.11)
    
    m3.movies_genres.find_or_create_by(genre: g5)
    m3.movies_genres.find_or_create_by(genre: g7)
    m3.movies_genres.find_or_create_by(genre: g6)
    
    if( !m3.picture.attached? && !m3.trailer.attached?)
        picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/MankImage.webp')
        trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/MankTrailer.mp4')
        media = trailer
        m3.picture.attach(io: picture, filename: 'MankImage.webp')
        m3.trailer.attach(io: trailer, filename: 'MankTrailer.mp4')
        m3.media = m1.trailer # does nothing, not holding actual media, for future use
    end
#
#
#


## Rango
    m4 = Movie.find_or_create_by(title: "Rango", cast:"Johnny Depp, Isla Fisher, Timothy Olyphant", director:"Gore Verbinski",summary:"Rango is an ordinary chameleon who accidentally winds up in the town of Dirt, a lawless outpost in the Wild West in desperate need of a new sheriff.", year: 2011, duration: 1.47)
  
    m4.movies_genres.find_or_create_by(genre: g9)
    m4.movies_genres.find_or_create_by(genre: g2)
    m4.movies_genres.find_or_create_by(genre: g7)
   
    if( !m4.picture.attached? && !m4.trailer.attached?)
        picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/RangoImage.webp')
        trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/RangoTrailer.mp4')
        media = trailer        
        m4.picture.attach(io: picture, filename: 'RangoImage.webp')
        m4.trailer.attach(io: trailer, filename: 'RangoTrailer.mp4')
        m4.media = m4.trailer # does nothing, not holding actual media, for future use
    end 
#
#
#


## Shadow
    m5 = Movie.find_or_create_by(title: "Shadow", cast:"Chao Deng, Li Sun, Ryan Zheng ", director:"Yimou Zhang",summary:"Life and intrigue in an ancient Chinese court.", year: 2018, duration:1.56 )
  
    m5.movies_genres.find_or_create_by(genre: g1)
    m5.movies_genres.find_or_create_by(genre: g2)
    m5.movies_genres.find_or_create_by(genre: g6)
   
    if( !m5.picture.attached? && !m5.trailer.attached?)
        picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/ShadowImage.webp')
        trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/ShadowTrailer.mp4')
        media = trailer
        m5.picture.attach(io: picture, filename: 'ShadowImage.webp')
        m5.trailer.attach(io: trailer, filename: 'ShadowTrailer.mp4')
        m5.media = m5.trailer # does nothing, not holding actual media, for future use
    end
#
#
#


## Snowden
    m6 = Movie.find_or_create_by(title: "Snowden", cast:"Joseph Gordon-Levitt, Shailene Woodley, Melissa Leo ", director:"Oliver Stone",summary:"The NSA's illegal surveillance techniques are leaked to the public by one of the agency's employees, Edward Snowden, in the form of thousands of classified documents distributed to the press.", year:2016 , duration:2.14 )
   
    m6.movies_genres.find_or_create_by(genre: g5)
    m6.movies_genres.find_or_create_by(genre: g10)
    m6.movies_genres.find_or_create_by(genre: g6)
   
    if( !m6.picture.attached? && !m6.trailer.attached?)
        picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/SnowdenImage.jpg')
        trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/SnowdenTrailer.mp4')
        media = trailer
        m6.picture.attach(io: picture, filename: 'SnowdenImage.jpg')
        m6.trailer.attach(io: trailer, filename: 'SnowdenTrailer.mp4')
        m6.media = m6.trailer # does nothing, not holding actual media, for future use
    end
#
#
#

## Spotlight
    m7 = Movie.find_or_create_by(title: "Spotlight", cast:"Mark Ruffalo, Michael Keaton, Rachel McAdams", director:"Tom McCarthy",summary:"The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.", year:2015 , duration:2.09 )
  
    m7.movies_genres.find_or_create_by(genre: g5)
    m7.movies_genres.find_or_create_by(genre: g10)
    m7.movies_genres.find_or_create_by(genre: g6)
  
    if( !m7.picture.attached? && !m7.trailer.attached?)
        picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/SpotlightImage.webp')
        trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/SpotlightTrailer.mp4')
        media = trailer
        m7.picture.attach(io: picture, filename: 'SpotlightImage.webp')
        m7.trailer.attach(io: trailer, filename: 'SpotlightTrailer.mp4')
        m7.media = m7.trailer # does nothing, not holding actual media, for future use
    end
#
#
#


## The Dark Knight
    m8 = Movie.find_or_create_by(title: "The Dark Knight", cast: "Christian Bale, Heath Ledger, Aaron Eckhart", director:"Christopher Nolan",summary:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", year:2008, duration:2.32 )
   
    m8.movies_genres.find_or_create_by(genre: g1)
    m8.movies_genres.find_or_create_by(genre: g10)
    m8.movies_genres.find_or_create_by(genre: g6)
   
    if( !m8.picture.attached? && !m8.trailer.attached?)
        picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/TheDarkKnightImage.jpg')
        trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/TheDarkKnightTrailer.mp4')
        media = trailer
        m8.picture.attach(io: picture, filename: 'TheDarkKnightImage.jpg')
        m8.trailer.attach(io: trailer, filename: 'TheDarkKnightTrailer.mp4')
        m8.media = m8.trailer # does nothing, not holding actual media, for future use
    end
#
#
#


## The Departed
    m9 = Movie.find_or_create_by(title: "The Departed", cast:"Leonardo DiCaprio, Matt Damon, Jack Nicholson", director:"Martin Scorsese",summary:"An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.", year: 2006 , duration:2.31 )
   
    m9.movies_genres.find_or_create_by(genre: g10)
    m9.movies_genres.find_or_create_by(genre: g6)
    m9.movies_genres.find_or_create_by(genre: g4)
   
    if( !m9.picture.attached? && !m9.trailer.attached?)
        picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/TheDepartedImage.jpg')
        trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/TheDepartedTrailer.mp4')
        media = trailer    
        m9.picture.attach(io: picture, filename: 'TheDepartedImage.jpg')
        m9.trailer.attach(io: trailer, filename: 'TheDepartedTrailer.mp4')
        m9.media = m9.trailer # does nothing, not holding actual media, for future use
    end
#
#
#


## The Irishman
    m10 = Movie.find_or_create_by(title: "The Irishman", cast:"Robert De Niro, Al Pacino, Joe Pesci", director:"Martin Scorsese",summary:"An old man recalls his time painting houses for his friend, Jimmy Hoffa, through the 1950-70s.", year: 2019 , duration: 3.29)
  
    m10.movies_genres.find_or_create_by(genre: g5)
    m10.movies_genres.find_or_create_by(genre: g10)
    m10.movies_genres.find_or_create_by(genre: g6)
   
    if( !m10.picture.attached? && !m10.trailer.attached?)
        picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/TheIrishmanImage.webp')
        trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/TheIrishmanTrailer.mp4')
        media = trailer
        m10.picture.attach(io: picture, filename: 'TheIrishmanImage.webp')
        m10.trailer.attach(io: trailer, filename: 'TheIrishmanTrailer.mp4')
        m10.media = m10.trailer # does nothing, not holding actual media, for future use
    end
#
#
#


## War Dogs
    m11 = Movie.find_or_create_by(title: "War Dogs", cast:"Jonah Hill, Miles Teller, Steve Lantz", director:"Todd Phillips",summary:"Loosely based on the true story of two young men, David Packouz and Efraim Diveroli, who won a three hundred million dollar contract from the Pentagon to arm America's allies in Afghanistan.", year: 2016 , duration:1.54 )
   
    m11.movies_genres.find_or_create_by(genre: g5)
    m11.movies_genres.find_or_create_by(genre: g7)
    m11.movies_genres.find_or_create_by(genre: g10)
    
    if( !m11.picture.attached? && !m11.trailer.attached?)
        picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/WarDogsImage.webp')
        trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/WarDogsTrailer.mp4')
        media = trailer
        m11.picture.attach(io: picture, filename: 'WarDogsImage.webp')
        m11.trailer.attach(io: trailer, filename: 'WarDogsTrailer.mp4')
        m11.media = m11.trailer # does nothing, not holding actual media, for future use
    end
#
#
#


## Peppermint
m12 = Movie.find_or_create_by(title: "Peppermint", cast:"Jennifer Garner, John Gallagher Jr., John Ortiz", director:"Pierre Morel",summary:"Five years after her husband and daughter are killed in a senseless act of violence, a woman comes back from self-imposed exile to seek revenge against those responsible and the system that let them go free.", year: 2018, duration: 1.41)
    
m12.movies_genres.find_or_create_by(genre: g1)
m12.movies_genres.find_or_create_by(genre: g6)
m12.movies_genres.find_or_create_by(genre: g4)

if( !m12.picture.attached? && !m12.trailer.attached?)
    picture = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/PeppermintImage.webp')
    trailer = open('https://darpaflix-pro.s3.us-east-2.amazonaws.com/PeppermintTrailer.mp4')
    media = trailer
    m12.picture.attach(io: picture, filename: 'PeppermintImage.webp')
    m12.trailer.attach(io: trailer, filename: 'PeppermintTrailer.mp4')
    m12.media = m12.trailer # does nothing, not holding actual media, for future use
end
#
#
#