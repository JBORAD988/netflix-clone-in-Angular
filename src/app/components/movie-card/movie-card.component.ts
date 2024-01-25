import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  standalone: true,
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit{
  @Input() movie : any = {}


  constructor() {
  }


  ngOnInit() {

  }

  protected readonly MovieService = MovieService;
}
