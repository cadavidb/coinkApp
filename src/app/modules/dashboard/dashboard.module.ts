import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './routing/dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestCardComponent } from './components/request-card/request-card.component';
import { ListItemsComponent } from './components/list-items/list-items.component';




@NgModule({
  declarations: [
    DashboardComponent,
    RequestCardComponent,
    ListItemsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
