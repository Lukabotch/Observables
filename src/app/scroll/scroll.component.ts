import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { ViewportScroller } from '@angular/common';
import { delay, of,Subject,takeUntil } from 'rxjs';


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
  movies: string[] = [];
  loading: boolean = false;
  obs$ = new Subject<void>();
  constructor(
    private scrollService: ScrollService,
    public viewportScroller: ViewportScroller,
  ) {}
  ngOnInit() {
    this.load.pipe(takeUntil(this.obs$)).subscribe((x) => this.movies.push(...x));
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
            this.load.pipe(takeUntil(this.obs$)).subscribe((x) => (this.movies = x));
            this.loading = false;
          }, 500);
        }
      });
    }
  }
    ngOnDestroy() {
    this.obs$.next()
    this.obs$.complete()
    this.scrollService.basicItems = [];
  }
}
