import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservableDataComponent } from './observable-data/observable-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ObservableDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
