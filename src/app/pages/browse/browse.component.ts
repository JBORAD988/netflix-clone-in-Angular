import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {HeaderComponent} from "../../components/header/header.component";
import {MovieCategoryComponent} from "../../components/movie-category/movie-category.component";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent , MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit{

  constructor(private router: Router , private toast:ToastrService,private movieService : MovieService) {
  }
  // movieService = inject(MovieService)

  popularMovies: any[] = [];
  NowPlayingMovies: any[] = [];
  TopRatedMovies: any[] = [];
  UpcomingMovies: any[] = [];

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((result: any) => {
      console.log(result);
      this.popularMovies = result.results;
    });

    this.movieService.getNowPlayingMovies().subscribe((result: any) => {
      console.log(result);
      this.NowPlayingMovies = result.results;
    });

    this.movieService.getTopRatedMovies().subscribe((result: any) => {
      console.log(result);
      this.TopRatedMovies = result.results;
    });

    this.movieService.getUpcomingMovies().subscribe((result: any) => {
      console.log(result);
      this.UpcomingMovies = result.results;
    });
  }

}
