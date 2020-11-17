import { Pipe, PipeTransform } from '@angular/core';
import {TariffModel} from '../../models/tarif.model';

@Pipe({
  name: 'sortByDownloadSpeed',
  pure: true
})
export class DownloadSpeedPipe implements PipeTransform {

  transform(values: TariffModel[], ...args: string[]): TariffModel[] {
    const valueFrom = (args[0] || '').replace(/\D/, '');
    const valueTo = (args[1] || '').replace(/\D/, '');
    const downloadAmountArray = values && values.map(val => +val.contractTerm.downloadSpeed.amount) || [];
    const min = Math.max(Math.min.apply(Math, downloadAmountArray), +valueFrom);
    const max = Math.min(Math.max.apply(Math, downloadAmountArray), +valueTo || Infinity);
    const result = (values || []).filter(
      item => {
        return min <= +item?.contractTerm.downloadSpeed.amount && +item?.contractTerm.downloadSpeed.amount <= max;
      }
    );
    return result;
  }
}
