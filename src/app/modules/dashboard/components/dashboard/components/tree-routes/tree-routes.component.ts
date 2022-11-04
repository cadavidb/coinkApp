import { Component, Input, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tree-routes',
  templateUrl: './tree-routes.component.html',
  styleUrls: ['./tree-routes.component.scss']
})
export class TreeRoutesComponent implements OnInit {
  currentLocation: string = 'Tarjetas Visa en dispensadores';
  @Input() routeTree: string = 'Solicitud tarjetas';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getRoute() {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
        if (event.snapshot.data['location']) {
          this.currentLocation = event.snapshot.data['location'];
        }
      }
    });
  }

}
