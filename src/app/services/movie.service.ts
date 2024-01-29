import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tmdbcConfig} from "../constants/config";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpService: HttpClient) {}

  getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + tmdbcConfig.accessToken);
    return headers;
  }

  getPopularMovies(){
    const headers=this.getHeaders()
    return  this.httpService.get("https://api.themoviedb.org/3/movie/popular",{
      headers
    })
  }


  getNowPlayingMovies(){
    const headers=this.getHeaders()
    return  this.httpService.get("https://api.themoviedb.org/3/movie/now_playing",{
      headers
    })
  }

  getTopRatedMovies(){
    const headers=this.getHeaders()
    return  this.httpService.get("https://api.themoviedb.org/3/movie/top_rated",{
      headers
    })
  }

  getUpcomingMovies(){
    const headers=this.getHeaders()
    return  this.httpService.get("https://api.themoviedb.org/3/movie/upcoming",{
      headers
    })
  }

  getMovieVideo(id: number){
    const headers = this.getHeaders()
    // return this.httpService.get("https://api.themoviedb.org/3/movie/"+ `${movie_id}` +"/videos")
    return this.httpService.get(`https://api.themoviedb.org/3/movie/${id}/videos`,{
      headers: headers
    });

  }

}
