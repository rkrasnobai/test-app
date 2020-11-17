import { Pipe, PipeTransform } from '@angular/core';
import {Type} from '../../models/tarif.model';

@Pipe({
  name: 'tariffBenefitCutting'
})
export class TariffBenefitCuttingPipe implements PipeTransform {

  transform(value: Type[]): Type[] {
    return value?.length > 3 ? value.slice(0, 3) : value;
  }
}
