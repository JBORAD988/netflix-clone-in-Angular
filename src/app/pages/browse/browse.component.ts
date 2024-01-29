import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {HeaderComponent} from "../../components/header/header.component";
import {MovieCategoryComponent} from "../../components/movie-category/movie-category.component";
import {MovieService} from "../../services/movie.service";
import {Movies} from "../../types/movies";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent , MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit{

  constructor(private router: Router , private toast:ToastrService, private movieService : MovieService , protected _sanitizer: DomSanitizer) {
  }
  // movieService = inject(MovieService)


  popularMovies: Movies[] = [];
  NowPlayingMovies: Movies[] = [];
  TopRatedMovies: Movies[] = [];
  UpcomingMovies: Movies[] = [];
  bannerMovie!:Movies;



  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((result: any) => {
      console.log(result);
      this.popularMovies = result.results;
      this.bannerMovie = this.popularMovies[0];
      this.movieService.getMovieVideo(this.bannerMovie.id).subscribe((res:any)=>
      {
        this.bannerMovie.videoKey=res.results.find((x:any)=>x.site='Youtube').key;
        // console.log(this.bannerMovie)
      })
    });

    this.movieService.getNowPlayingMovies().subscribe((result: any) => {
      // console.log(result);
      this.NowPlayingMovies = result.results;
    });

    this.movieService.getTopRatedMovies().subscribe((result: any) => {
      // console.log(result);
      this.TopRatedMovies = result.results;
    });

    this.movieService.getUpcomingMovies().subscribe((result: any) => {
      // console.log(result);
      this.UpcomingMovies = result.results;
    });
  }

}
