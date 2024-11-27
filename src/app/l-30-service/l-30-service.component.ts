import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-l-30-service',
  imports: [],
  templateUrl: './l-30-service.component.html',
  styleUrl: './l-30-service.component.css'
})
@Injectable(
  // {providedIn:'root'}
)

export class L30ServiceComponent {
  set(key :string , value :unknown){
    const encripted = JSON.stringify(value).toString();
    localStorage.setItem (key, encripted)
  }
}
