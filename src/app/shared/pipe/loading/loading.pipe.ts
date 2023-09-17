import { Pipe, PipeTransform } from '@angular/core';
import { catchError, isObservable, map, Observable, of, startWith } from 'rxjs';

@Pipe({
  name: 'loading',
})
export class LoadingPipe implements PipeTransform {
  transform(val: any, ...args: any[]): Observable<any> {
    return isObservable(val)
      ? val.pipe(
          map((value: any) => ({
            loading: value.type === 'start',
            value: value.type ? value.value : value,
          })),
          startWith({ loading: true }),
          catchError((error) => of({ loading: false, error }))
        )
      : val;
  }
}
