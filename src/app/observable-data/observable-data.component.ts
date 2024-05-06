import { Component, OnDestroy, OnInit } from '@angular/core';
import { ObservableDataService } from '../observable-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-data',
  standalone: true,
  imports: [],
  providers: [ObservableDataService],
  templateUrl: './observable-data.component.html',
  styleUrl: './observable-data.component.css',
})
export class ObservableDataComponent implements OnInit, OnDestroy {
  doubleValuesSub!: Subscription;
  filterEvenValuesSub!: Subscription;
  sumOfAllValuesSub!: Subscription;

  constructor(private observableDataService: ObservableDataService) {}

  ngOnInit() {
    this.doubleValuesSub = this.observableDataService
      .doubleValues()
      .subscribe((result) => {
        console.log('Double values:', result);
      });

    this.filterEvenValuesSub = this.observableDataService
      .filterEvenValues()
      .subscribe((result) => {
        console.log('Even values:', result);
      });

    this.sumOfAllValuesSub = this.observableDataService
      .sumOfAllValues()
      .subscribe((result) => {
        console.log('Sum of all values:', result);
      });
  }
  ngOnDestroy(): void {
    this.doubleValuesSub?.unsubscribe();
    this.filterEvenValuesSub?.unsubscribe();
    this.sumOfAllValuesSub?.unsubscribe();
  }
}
