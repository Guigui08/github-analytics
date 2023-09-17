import {Directive, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

/**
 * To be extended by any component which subscribes to observable and has to close them when destroyed.
 */
@Directive()
export abstract class AbstractAutoCloseSubscriptions implements OnDestroy {
  private subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  protected registerForAutoClose(sub: Subscription | undefined): void {
    if (sub && !sub.closed) {
      this.subscriptions.push(sub);
    }
  }
}
