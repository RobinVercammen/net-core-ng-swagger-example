import { Component } from '@angular/core';
import { ValuesService } from './api/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-swagger-example-client';
  constructor(valuesService: ValuesService){
    valuesService.ApiValuesPost({value: "bla"}).subscribe()
  }
}
