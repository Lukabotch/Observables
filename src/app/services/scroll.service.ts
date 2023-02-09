import { Injectable } from '@angular/core';
import { delay, from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  basicItems: any = [];
  newItems: string[] = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Godfather: Part II',
    'The Dark Knight',
    '12 Angry Men',
    "Schindler's List",
    'The Lord of the Rings: The Return of the King',
    'Pulp Fiction',
    'The Good, the Bad and the Ugly',
    'Fight Club',
    'Forrest Gump',
    'Inception',
    'The Lord of the Rings: The Fellowship of the Ring',
    'Star Wars: Episode V - The Empire Strikes Back',
    'The Lord of the Rings: The Two Towers',
    'The Matrix',
    'Goodfellas',
    'Se7en',
    'City of God',
    'The Silence of the Lambs',
    "It's a Wonderful Life",
    'Life is Beautiful',
    'The Usual Suspects',
    'Léon: The Professional',
    'Spirited Away',
    'Saving Private Ryan',
    'Interstellar',
    'The Green Mile',
    'The Prestige',
    'The Intouchables',
    'The Lion King',
    'Modern Times',
    'Raiders of the Lost Ark',
    'Rear Window',
    'The Pianist',
    'The Departed',
    'Whiplash',
    'Gladiator',
    'Memento',
    'The Great Dictator',
    'The Lives of Others',
    'Terminator 2: Judgment Day',
    'Back to the Future',
    'Raiders of the Lost Ark',
    'Psycho',
    'Rear Window',
    'The Shining',
    'Apocalypse Now',
    'Alien',
    'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    'The Great Escape',
    'Once Upon a Time in the West',
    'Sunset Boulevard',
    'Cinema Paradiso',
    'Amélie',
    'The Apartment',
    'Some Like It Hot',
    'Double Indemnity',
    'The Third Man',
    'North by Northwest',
    'Vertigo',
    'Rear Window',
    'Psycho',
    'Notorious',
    'Rear Window',
    'Casablanca',
    'Gone with the Wind',
    'The Wizard of Oz',
    "Singin' in the Rain",
    'City Lights',
    'Modern Times',
    'It Happened One Night',
    'Mr. Smith Goes to Washington',
    'Giant',
    'Rebel Without a Cause',
    'West Side Story',
    'The Graduate',
    'Easy Rider',
    'Bonnie and Clyde',
    'Midnight Cowboy',
    'A Clockwork Orange',
    'The Godfather: Part II',
    'Chinatown',
  ];
  loadSize = 10;
  loadMore(): Observable<any> {
    const startIndex = this.basicItems.length;
    const endIndex = startIndex + this.loadSize;
    return of(this.getMovie(startIndex, endIndex));
  }
  getMovie(start: number, end: number) {
    this.basicItems.push(...this.newItems.slice(start, end));
    return this.basicItems;
  }
  constructor() {}
}
