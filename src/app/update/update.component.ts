import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  plant_N!:string
  plant_n!:string
  plant_l!:string
  tank_c!:string
  chlorine_a!:string 

  savepurification(){

    var inputData = {
      plant_N :this.plant_n,
      plant_n :this.plant_n,
      plant_l :this.plant_l,
      tank_c :this.tank_c,
      chlorine_a :this.chlorine_a

    }

    
  }


}
