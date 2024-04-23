import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableDataService {
  private data: number[] = [1, 2, 3, 4, 5];

  constructor() {}

  getObservableData(): Observable<number[]> {
    return of(this.data);
  }

  doubleValues(): Observable<number[]> {
    return this.getObservableData().pipe(
      map((data) => data.map((value) => value * 2))
    );
  }

  filterEvenValues(): Observable<number[]> {
    return this.getObservableData().pipe(
      map((data) => data.filter((value) => value % 2 === 0))
    );
  }

  sumOfAllValues(): Observable<number> {
    return this.getObservableData().pipe(
      map((data) => data.reduce((sum, curr) => sum + curr, 0))
    );
  }
}
