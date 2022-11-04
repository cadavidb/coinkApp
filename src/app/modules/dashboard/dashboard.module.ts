import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './routing/dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestCardComponent } from './components/request-card/request-card.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { TreeRoutesComponent } from './components/dashboard/components/tree-routes/tree-routes.component';
import { FilterTableComponent } from './components/request-card/components/filter-table/filter-table.component';
import { DashboardService } from './services/dashboard.service';
import { PaginatorComponent } from './components/request-card/components/paginator/paginator.component';




@NgModule({
  declarations: [
    DashboardComponent,
    RequestCardComponent,
    ListItemsComponent,
    TreeRoutesComponent,
    FilterTableComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  providers:[DashboardService]
})
export class DashboardModule { }
