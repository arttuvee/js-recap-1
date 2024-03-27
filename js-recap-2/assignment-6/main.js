function getMovieFromUser() {
  const movieTitle = prompt('Enter the title of the movie');
  const movieRating = Number(prompt('Enter the rating of the movie'));
  return {
    title: movieTitle,
    rating: movieRating,
  };
}

function getMoviesFromUser(amount) {
  const movies = [];
  for (let i = 0; i < amount; i++) {
    movies.push(getMovieFromUser());
  }
  return movies;
}

function sortMovies(array) {
  const sortedMovies = [...array];
  sortedMovies.sort(function (a, b) {
    return b.rating - a.rating;
  });
  return sortedMovies;
}

function displayMovies(movies) {
  let movieList = '';
  for (const movie of movies) {
    movieList += `<li>Name: ${movie.title} Rating: ${movie.rating}</li>`;
  }
  document.querySelector('#allMovies').innerHTML = 'All movies: ' + movieList;
}

function displayHighestRatedMovie(movie) {
  document.querySelector('#highestRated').innerHTML =
    'Highest rated movie: ' + `${movie.title} Rating: ${movie.rating}`;
}

const amount = prompt('How many movies do you want to rate?');
const movieArray = getMoviesFromUser(amount);
console.log(movieArray);

const sortedMovies = sortMovies(movieArray);
displayMovies(sortedMovies);
displayHighestRatedMovie(sortedMovies[0]);
