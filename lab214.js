"use strict";

//let numbersOfFilms;

const numbersOfFilms =+prompt ('How many movie have you watched already', '');
console.log(numbersOfFilms);
const personalMovieDb = { count :numbersOfFilms,
                         movies : {},
                          actors : {} ,
                          genres : [],
                           private: "false"};  
console.log(personalMovieDb.count);

const movieNameFirst =prompt ('Which movie you have seen recently', '');
const movieRatingFirst =+prompt ('How would you rate it', '');
const movie = { movieName :movieNameFirst,
                         rating: movieRatingFirst
                         }; 


console.log (movie.movieName, movie.rating);

const movieNameSecond =prompt ('Which movie you have seen recently', '');
const movieRatingSecond =+prompt ('How would you rate it', '');
movie.movieName= movieNameSecond;
movie.rating = movieRatingSecond;

console.log (movie.movieName, movie.rating);
