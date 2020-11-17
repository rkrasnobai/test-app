import { Component } from '@angular/core';
import {FiltersModel} from '../../../../models/filters.model';

@Component({
  selector: 'app-tariff-table',
  templateUrl: './tariff-table.component.html',
  styleUrls: ['./tariff-table.component.scss']
})
export class TariffTableComponent{
  filtersValue: FiltersModel;

  onFiltersChange(filters: FiltersModel): void {
    this.filtersValue = filters;
  }
}
