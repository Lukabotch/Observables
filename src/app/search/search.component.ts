import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, from, map, Observable, of } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  items = new FormControl();
  get movies() {
    return this.movieService.items;
  }
  movieName: any[] | undefined;
  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.items.valueChanges
      .pipe(
        debounceTime(500),
        map((x: any) => this.movies.filter((y) => x.includes(y.name.toLowerCase())))
      )
      .subscribe((x) =>
        x.length > 0 ? (this.movieName = x) : (this.movieName = [])
      );
  }
}
