import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {MockDataService} from '../../../services/mock-data.service';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {FiltersModel} from '../../../../models/filters.model';
import {getUniqueArray} from '../../../../shared/helpers/helpers';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit, OnDestroy {
  tariffNameSelect: string[] = [];

  filters: FormGroup;

  private destroy$: Subject<null> = new Subject<null>();

  @Output() filtersChange = new EventEmitter<FiltersModel>();

  constructor(private mockDataService: MockDataService,
              private cdr: ChangeDetectorRef,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getFiltersData();
    this.initForm();
    this.listenFiltersChange();
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  trackByFn(index: number, item: string): string {
    return item;
  }

  resetControl(controlName: string): void {
    this.getControl(controlName).reset();
  }

  getControl(controlName: string): AbstractControl {
    return this.filters.get(controlName);
  }

  private initForm(): void {
    this.filters = this.fb.group({
      priceValueFrom: '',
      priceValueTo: '',
      downloadSpeedFrom: '',
      downloadSpeedTo: '',
      tariffName: '',
    });
  }

  private listenFiltersChange(): void {
    this.filters.valueChanges
      .pipe(takeUntil(this.destroy$),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((data: FiltersModel) => {
        this.filtersChange.emit(data);
      });
  }

  private getFiltersData(): void {
    this.mockDataService.getData()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(({offers}) => {
        offers.forEach(el => {
          this.tariffNameSelect = [...this.tariffNameSelect, el?.provider.content.text];
          this.tariffNameSelect = getUniqueArray(this.tariffNameSelect);
        });
        this.cdr.markForCheck();
      });
  }
}
