// Basic Requirements

// 2. In terms of the properties of books that you thought of, represent the following books as data:
var book1={
    title:"Harry Potter and the Sorcerer's Stone",
    author:"J.K. Rowling",
    MSRP:"13$",
    genre:"fantasy",
    pages:200,
    description:"Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him."
}

var book2={
    title:"Romeo and Juliet ",
    author:"William Shakespeare",
    MSRP:"12$",
    genre:"romance",
    pages:150,
    description:"It is a tragic love story where the two main characters, Romeo and Juliet, are supposed to be sworn enemies but fall in love."
}
// 3. You may have been rewriting the same type of object over and over. We need to stay DRY (Do Not Repeat). Write a function makeBook that takes as arguments different attributes of a book and returns an object representing that book that has the proper structure (we call this a factory function).
function makeBook(Title, Author, MSRP, Genre,PagesNumber,Description){
    return {
       title:Title,
       author:Author,
       MSRP:MSRP,
       genre:Genre,
       pagesNumber:PagesNumber,
       description:Description
   }
}
// 4. Look at one of your book objects in the console. This is the object inspector. The object inspector is nice to have, but it will be easier to have a function to display the more important information easily. Write a function called displayBook that takes a book as an argument, and returns the important information in a more readable way,
function displayBook(book){
    return  book.title+' '+book.author+' '+book.MSRP+' '+book.genre+' '+book.pagesNumber+' '+book.description;
}
// 5. Create an array called books that holds all of the books that you created above.
var books=[book1,book2]
// 6. Your function displayBook can be used to display a single book as a string. Now, write a function displayBooks that, given an array of books, returns a single string consisting of all of the books. Use the function displayBook to format all of the books. Each book should be numbered and separated with a newline (we also call this a line break) character so that each book is shown on a separate line in the console. The newline character is specified with a special escaped character in a string:
function displayBooks(array) {
    var str=''
    for(var i=0;i<array.length;i++){
        str=str+i+"."+(array[i])+"\n";
    }
    return str
}
// 7. Write a function searchBooks that, given a query and an array of books, searches the array of books for 'matching' books. You will decide what way you want to write your search algorithm. Here are some things to think about: What fields will be searched? Will you search multiple fields simultaneously (it might be best to start with one field, e.g.title)? Should the search be case-sensitive? How will the search work? Will it only work from the beginning of a field, or from anywhere within? some hints:
function isMatch(query,singleBook) {
    var lowerQuery=query.toLowerCase()
    var lowerBook=singleBook.toLowerCase()
    if(lowerBook.indexOf(lowerQuery)>0){
        return true
    }
    return false
}
function searchBooks(query,array) {
    for(var i=0;i<array.length;i++){
        return isMatch(query,array[i].title)
    }
}

// 8. Write a function removeBook that, given a book's title and an array of books, returns a new array of books that does not contain the book with the provided title.
function removeBook(bookTitle,array) {
    for(var i=0;i<array.length;i++){
        if(array[i].title===bookTitle){
            array.splice(i,1)
        }
    }
    return array
}
   
// More Practice
// 1. As we did before, think about what kinds of aspects of movies you would like to represent. A few ideas are: Title ,Director ,Duration ,Release Date ,Actors/Actresses ,Studio(s) ,Synopsis ,Rating
var movie={
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    releaseDate: "2010-07-16",
    actors: [
      { name: "Leonardo DiCaprio", role: "Cobb" },
      { name: "Joseph Gordon-Levitt", role: "Arthur" }
    ],
    studio: "Warner Bros.",
    synopsis: "A thief who steals corporate secrets through dream-sharing technology.",
    ratings: { imdb: 8.8, metacritic: 74, rtFresh: true }
  }
//  2. Make five more movie objects using the same format you decided upon.

    
    var movie1={  title: "Inception",
      director: "Christopher Nolan",
      duration: 148,
      releaseDate: "2010-07-16",
      actors: [
        { name: "Leonardo DiCaprio", role: "Cobb" },
        { name: "Joseph Gordon-Levitt", role: "Arthur" }
      ],
      studio: "Warner Bros.",
      synopsis: "A thief who steals corporate secrets through dream-sharing technology.",
      ratings: { imdb: 8.8, metacritic: 74, rtFresh: true }
    }
    var movie2= {
      title: "Parasite",
      director: "Bong Joon Ho",
      duration: 132,
      releaseDate: "2019-05-21",
      actors: [
        { name: "Song Kang-ho", role: "Kim Ki-taek", awards: ["Oscar"] }
      ],
      studio: ["CJ Entertainment", "Barunson E&A"],
      synopsis: "Greed and class discrimination threaten a poor family's newfound wealth.",
      ratings: { imdb: 8.6, metacritic: 96, rtFresh: true }
    }
    var movie3={
      title: "The Social Network",
      director: "David Fincher",
      duration: 120,
      releaseDate: "2010-10-01",
      actors: [
        { name: "Jesse Eisenberg", role: "Mark Zuckerberg" }
      ],
      studio: "Columbia Pictures",
      synopsis: "The story of Facebook's founding and the lawsuits that followed.",
      ratings: { imdb: 7.8, metacritic: 95, rtFresh: true }
    }
    var movie4= {
      title: "Mad Max: Fury Road",
      director: "George Miller",
      duration: 120,
      releaseDate: "2015-05-15",
      actors: [
        { name: "Tom Hardy", role: "Max Rockatansky" },
        { name: "Charlize Theron", role: "Imperator Furiosa" }
      ],
      studio: "Warner Bros.",
      synopsis: "A post-apocalyptic action film set in a desert wasteland.",
      ratings: { imdb: 8.1, metacritic: 90, rtFresh: true }
    }
    var movie5= {
      title: "Whiplash",
      director: "Damien Chazelle",
      duration: 106,
      releaseDate: "2014-10-10",
      actors: [
        { name: "Miles Teller", role: "Andrew Neiman" },
        { name: "J.K. Simmons", role: "Terence Fletcher", awards: ["Oscar"] }
      ],
      studio: "Sony Pictures Classics",
      synopsis: "A young drummer battles a ruthless instructor to achieve greatness.",
      ratings: { imdb: 8.5, metacritic: 88, rtFresh: true }
    }
//  3. Write a factory function for movies. HINT: What is a factory function? We explained it above!
function addMovie(title,director,duration,releaseDate,actors=[],studio,synopsis,ratings={}){
    return{
        title:title,
        director:director,
        duration:duration,
        releaseDate:releaseDate,
        actors: actors ,
        studio:studio,
        synopsis:synopsis,
        ratings:ratings
    }
}
// 4. Write a function displayMovie that works like displayBook, but for movies.
function displayMovie(movie){
    return  movie.title+' '+movie.director+' '+movie.duration+' '+movie.releaseDate+' '+movie.actors+' '+movie.studio+movie.synopsis+' '+movie.ratings;
}
// 5. Write a function displayCast that displays the cast of a movie, including: Role , Actor/Actress name
function displayCast(movie){
    var actor=movie.actors
    return actor.name+' '+actor.role
}
   
// 6. Create an array to hold the movies that you created called movies, and add your movies to it.
var movies=[movie1,movie2,movie3,movie4,movie5] 
// 7. As before, write a displayMovies function that works just like displayBooks.
function displayMovie(movie) {
    var str=''
    for(var i=0;i<array.length;i++){
        str=str+i+"."+displayMovie(array[i])+"\n";
    }
    return str
}
// 8. Calculate the average length of your movies by writing a function called averageLength that will accept an array of movies as a parameter and output the average length. The difficulty of this problem is dependent on how you have chosen to store the duration.
function averageLength(array){
    var sum=0
    for(var i=0;i<array.length;i++){
        sum=sum+array[i].duration
    }
    var avrg=sum/array.length
    return avrg
}
// 9. How about searching your movies array? Write a function that works like searchBooks, but for movies.
function searchMovies(query,array) {
    for(var i=0;i<array.length;i++){
        return isMatch(query,array[i].title)
    }
}
// Advanced
// 1. Tagging System: Some books have multiple categories, have won awards, are on a best-seller list, or have other special characteristics. Let's incorporate a tagging system that will allow us to represent all of these. Write functions addTag and removeTag that each accept a book and a tag as parameters, and either add tags or remove tags respectively.
function addTag(book,tag){
    if (!book.tags){
         book.tags = []
    }
    book.tags.push(tag)
    return book
}
function removeTag(book,tag){
    var index=book.tags.indexOf(tag)
    if(index>0){
        book.tags.splice(index,1)
    }
    return book
}
book1.tag=addTag(book1,'bestseller')
book2.tag=addTag(book2,'pulitzer')

function searchBooks(query,array) {
    for(var i=0;i<array.length;i++){
        return isMatch(query,array[i].title)
    }
}
// 2. Let's revisit your removeBooks function: what would happen if you had two books with the same title, but different authors? Would your algorithm remove both books? This is a common problem that we usually solve by providing a unique identifier for each item.
var books=[book1,book2]
function addId(books){
    for(var i=0;i<books.length;i++){
        books.Id=i
    }
    return books
}
function removeBook(bookId,array) {
    for(var i=0;i<array.length;i++){
        if(array[i].Id===bookId){
            array.splice(i,1)
        }
    }
    return array
}
// 3. Can you think of a way to write a more abstract displayItem function that works for books and movies (depending on how you have structured your objects, this may or may not work well)?
// 4. Write a more general searchItems function that accepts as parameters the query, items to search, and an array of keys that should be searched. Refactor searchMovies and searchBooks to use this function.



