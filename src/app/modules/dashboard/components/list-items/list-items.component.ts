import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
})
export class ListItemsComponent implements OnInit {
  menus = [
    {
      name: 'Tarjetas Visa en dispensadores',
      items: [
        { name: 'Crear Dispensador', url: '/dashboard/create-dispenser' },
        {
          name: 'Monitorear y editar dispensadores',
          url: '/dashboard/list-dispensers',
        },
        { name: 'Solicitud tarjetas', url: '/dashboard/create-card' },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
