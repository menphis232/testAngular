import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { Route, RouterModule } from '@angular/router';
import { OperationsComponent } from './components/operations/operations.component';
import { PreordersComponent } from './components/preorders/preorders.component';
import { SharedModule } from 'app/shared/shared.module';

const routes: Route[] = [
  {
      path     : 'list',
      component: ListComponent
  },
  {
    path     : 'detalle/:id',
    component: PreordersComponent
}
];

@NgModule({
  declarations: [
    ListComponent,
    OperationsComponent,
    PreordersComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule
  ]
})
export class ListModule { }
