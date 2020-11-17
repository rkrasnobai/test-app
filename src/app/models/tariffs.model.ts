import {TariffModel} from './tarif.model';

export interface TariffsModel {
  offers: TariffModel[];
  totalResults: number;
}
