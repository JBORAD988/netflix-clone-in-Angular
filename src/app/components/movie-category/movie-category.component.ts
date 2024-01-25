import {Component, Input} from '@angular/core';
import {MovieCardComponent} from "../movie-card/movie-card.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  standalone: true,
  imports:[MovieCardComponent, CommonModule],
  styleUrls: ['./movie-category.component.scss']
})
export class MovieCategoryComponent {

@Input() title = "";
@Input() movieList:any[] = [];

// make this upper input as chanege note

}
