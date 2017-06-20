import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './mock-movies';

import { MovieTime } from './movie-time';
import { MOVIESTIME } from './mock-movies-time';
@Injectable()
export class MovieService {
  getMovies(): Promise<Movie[]> {
    return Promise.resolve(MOVIES);
  }

  getMoviesTime(): Promise<MovieTime[]> {
    return Promise.resolve(MOVIESTIME);
  }  

  getHeroesSlowly(): Promise<Movie[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getMovies()), 2000);
    });
  }

  getMovie(id: number): Promise<Movie> {
    return this.getMovies()
               .then(movies => movies.find(movie => movie.id === id));
  }

  getMovieTime(id: number): Promise<MovieTime>{
    return this.getMoviesTime()
               .then(moviesTime => moviesTime.find(movieTime => movieTime.id === id));
  }
}