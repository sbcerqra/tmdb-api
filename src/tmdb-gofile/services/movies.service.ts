import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { movieDbResponse } from '../models/dto/movieDbResponse';
import axios from 'axios';
import { Movies } from '../models/movies';
dotenv.config();

@Injectable()
export class MoviesService {
  constructor(private readonly httpService: HttpService) {}

  async FetchMovies() {
    const movie: Movies[] = [];
    const {data:movieList} = await axios.get<movieDbResponse>(process.env.TMDB_URL, 
      {
        headers: {
          'Accept-Encoding': 'application/json',
        },
      });
      movieList.results.forEach(function(m){
        movie.push(m)
      });
    return movie;
  }
}
