import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OnlyNumbersDirective} from './directives/only-numbers.directive';
import {SortingByPricePipe} from './pipes/price.pipe';
import {DownloadSpeedPipe} from './pipes/download-speed.pipe';
import {TariffNamePipe} from './pipes/tariff-name.pipe';
import {TariffBenefitCuttingPipe} from './pipes/tariff-benefit-cutting.pipe';

@NgModule({
  exports: [
    SortingByPricePipe,
    DownloadSpeedPipe,
    TariffNamePipe,
    TariffBenefitCuttingPipe,
    OnlyNumbersDirective,
  ],
  declarations: [
    SortingByPricePipe,
    DownloadSpeedPipe,
    TariffNamePipe,
    TariffBenefitCuttingPipe,
    OnlyNumbersDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
