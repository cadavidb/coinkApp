import { Component } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { map,Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  showBar = true;
  watcher!: Subscription;
  isMobile = false;

  expandedIndex = 0;

  constructor(private mediaObserver: MediaObserver) {
    this.initializeWatcher();
  }

  changeShowBar() {
    this.showBar = !this.showBar;
  }

  initializeWatcher(): void {
    this.watcher = this.mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((change) => {
        switch (change.mqAlias) {
          case 'xs':
            this.isMobile = true;
            break;
          case 'sm':
            this.isMobile = true;
            break;
          case 'md':
            this.isMobile = false;
            break;
          case 'lg':
            this.isMobile = false;
            break;
          default:
            this.isMobile = false;
            break;
        }
      });
  }
}
