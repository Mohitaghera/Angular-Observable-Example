import { Component, OnInit } from '@angular/core';
import { ObservableDataService } from '../observable-data.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-observable-data',
  standalone: true,
  imports: [],
  providers: [ObservableDataService],
  templateUrl: './observable-data.component.html',
  styleUrl: './observable-data.component.css',
})
export class ObservableDataComponent implements OnInit {
  constructor(private observableDataService: ObservableDataService) {}

  ngOnInit() {
    this.observableDataService.doubleValues().subscribe((result) => {
      console.log('Double values:', result);
    });

    this.observableDataService.filterEvenValues().subscribe((result) => {
      console.log('Even values:', result);
    });

    this.observableDataService.sumOfAllValues().subscribe((result) => {
      console.log('Sum of all values:', result);
    });
  }
}
