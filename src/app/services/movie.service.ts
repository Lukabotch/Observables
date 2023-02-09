import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  items = [
    { name: 'Pulp Fiction' },
    { name: 'Kill Bill' },
    { name: 'Reservoir Dogs' },
  ];
  constructor() { }

}
