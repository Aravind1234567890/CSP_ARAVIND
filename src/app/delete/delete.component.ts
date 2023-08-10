import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  plant_n!:string
  

  savepurification(){

    var inputData = {
      plant_n :this.plant_n,
      

    }

    
  }

}
