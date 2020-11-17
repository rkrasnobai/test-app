import { Pipe, PipeTransform } from '@angular/core';
import {TariffModel} from '../../models/tarif.model';

@Pipe({
  name: 'sortByTariffName',
  pure: true
})
export class TariffNamePipe implements PipeTransform {

  transform(value: TariffModel[], arg: string): TariffModel[] {
    return arg ? value?.filter(data => data?.provider.content.text === arg) : value;
  }

}
