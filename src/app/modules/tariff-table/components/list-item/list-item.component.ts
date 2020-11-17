import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TariffModel} from '../../../../models/tarif.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input() item: TariffModel;
  @Input() index: number;
}
