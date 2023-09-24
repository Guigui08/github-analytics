import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { AbstractAutoCloseSubscriptions } from '../abstract/abstract-auto-close-subscriptions';

@Component({
  selector: 'wmd-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
})
export class AutocompleteComponent extends AbstractAutoCloseSubscriptions implements OnInit {
  @Input() public searchForm!: FormGroup;
  @Input() public searchFormControlName!: string;
  @Input() public searchFormPlaceholder!: string;

  @Output() public onSearch = new EventEmitter<string>();

  ngOnInit(): void {
    this.registerForAutoClose(
      this.searchForm
        ?.get(this.searchFormControlName!)
        ?.valueChanges?.pipe(distinctUntilChanged(), debounceTime(200))
        .subscribe((value) => {
          this.onSearch.emit(value);
        })
    );
  }
}
