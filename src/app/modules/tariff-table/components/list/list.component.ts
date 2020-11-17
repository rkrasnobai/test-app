import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MockDataService} from '../../../services/mock-data.service';
import {Observable} from 'rxjs';
import {TariffsModel} from '../../../../models/tariffs.model';
import {FiltersModel} from '../../../../models/filters.model';
import {TariffModel} from '../../../../models/tarif.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  data: Observable<TariffsModel> = this.mockDataService.getData();

  @Input() filtersValue: FiltersModel;

  constructor(private mockDataService: MockDataService) {
  }

  trackByFn(index: number, item: TariffModel): string {
    return item.product?.id;
  }
}
