import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { L10BindingComponent } from './l-10-binding/l-10-binding.component';
import { L20InputOutputComponent } from "./l-20-inputoutput/l-20-inputoutput.component";
import { L30ServiceComponent } from "./l-30-service/l-30-service.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, L10BindingComponent, L20InputOutputComponent, L30ServiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
//myservice = Inject(L30ServiceComponent)
//  constructor(private  myservice) {}

  constructor(
    private myservice: L30ServiceComponent) { }


  title = 'todo-app';
  
  ts_ParentVarible ='My Varible .ts Parent To Child';
  handleCaptionClick(e:any){
    alert('Caption Clicked '+ e )
  }
  
  handleSetUserData(){
    this.myservice.set('User',{name:'Ali' , age:30})
  }

}
