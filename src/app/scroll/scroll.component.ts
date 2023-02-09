import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { ViewportScroller } from '@angular/common';
import { delay, of } from 'rxjs';


@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
})
export class ScrollComponent {
  @ViewChild('scrollableDiv', { static: false })
  scrollableDiv: ElementRef<HTMLDivElement> | undefined;
  get load() {
    return this.scrollService.loadMore();
  }
  container: HTMLElement;
  movies: string[] = [];
  loading: boolean = false;
  constructor(
    private scrollService: ScrollService,
    public viewportScroller: ViewportScroller,
    private elementRef: ElementRef
  ) {
    this.container = this.elementRef.nativeElement;
  }
  ngOnInit() {
    this.load.subscribe((x) => this.movies.push(...x));
  }
  ngAfterViewInit() {
    if (this.scrollableDiv) {
      this.scrollableDiv.nativeElement.addEventListener('scroll', () => {
        if (this.movies.length == this.scrollService.newItems.length) {
          this.loading = false;
        } else if (
          this.scrollableDiv &&
          this.scrollableDiv.nativeElement.scrollTop +
            this.scrollableDiv.nativeElement.clientHeight >=
            this.scrollableDiv.nativeElement.scrollHeight
        ) {
          this.loading = true;
          setTimeout(() => {
            this.load.subscribe((x) => (this.movies = x));
            this.loading = false;
          }, 500);
        }
      });
    }
  }
}
