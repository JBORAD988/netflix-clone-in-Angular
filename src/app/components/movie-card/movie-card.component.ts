import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movies} from "../../types/movies";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit{
  @Input() movie! : Movies;


  constructor() {
  }


  ngOnInit() {

  }
}
