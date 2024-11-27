import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-l-10-binding',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './l-10-binding.component.html',
  styleUrl: './l-10-binding.component.css'
})
export class L10BindingComponent {
 //string binding
 name:string ='mohammad zaman';

 //property binding
 id:string="MyId";

//eventBinding
 handleclick(){
   alert(' handleclick: ' + this.name);
 }
}
