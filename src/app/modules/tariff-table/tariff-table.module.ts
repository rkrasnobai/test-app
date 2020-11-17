import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FiltersComponent} from './components/filters/filters.component';
import {ListComponent} from './components/list/list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListItemComponent} from './components/list-item/list-item.component';
import {TariffTableComponent} from './components/tariff-table/tariff-table.component';
import {RouterModule, Routes} from '@angular/router';
import {MockDataService} from '../services/mock-data.service';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TariffTableComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    TariffTableComponent,
    FiltersComponent,
    ListComponent,
    ListItemComponent,
  ],
  exports: [
    FiltersComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [MockDataService]
})
export class TariffTableModule { }
