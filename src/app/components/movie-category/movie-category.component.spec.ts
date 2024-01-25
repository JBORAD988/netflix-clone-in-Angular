import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCategoryComponent } from './movie-category.component';

describe('MovieCategoryComponent', () => {
  let component: MovieCategoryComponent;
  let fixture: ComponentFixture<MovieCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCategoryComponent]
    });
    fixture = TestBed.createComponent(MovieCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
