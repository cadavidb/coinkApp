import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { itemsMenuDashboard } from '../../utils/items-menu.utils';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
})
export class ListItemsComponent implements OnInit {
  @Output() OnMenuSelected: EventEmitter<string> = new EventEmitter();
  menus = itemsMenuDashboard;
  constructor() {}

  ngOnInit(): void {}

  selectedMenu(menu: string) {
    this.OnMenuSelected.emit(menu);
  }
}
