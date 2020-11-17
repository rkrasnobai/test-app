import { Pipe, PipeTransform } from '@angular/core';
import {TariffModel} from '../../models/tarif.model';

@Pipe({
  name: 'sortByPrice',
  pure: true
})
export class SortingByPricePipe implements PipeTransform {

  transform(value: TariffModel[] , ...args: string[]): TariffModel[] {
    const valueFrom = (args[0] || '').replace(/\D/, '');
    const valueTo = (args[1] || '').replace(/\D/, '');
    const amountArray = value && value.map(val => +val.cost.effectiveCost.amount) || [];
    const min = Math.max(Math.min.apply(Math, amountArray), +valueFrom);
    const max = Math.min(Math.max.apply(Math, amountArray), +valueTo || Infinity);
    const result = (value || []).filter(
      item => {
        return min <= +item?.cost?.effectiveCost?.amount && +item?.cost?.effectiveCost?.amount <= max;
      }
    );
    return result;
  }
}
