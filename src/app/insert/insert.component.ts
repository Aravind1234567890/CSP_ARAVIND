import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  PuriDetails,
  UniqueConstraintError,
} from '../Details';
import { Subscription } from 'rxjs';
import { CRUDService } from '../crud.service';

@Component({
  selector: 'app-operations',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css'],
})
export class InsertComponent implements OnInit, OnDestroy {
  constructor(private Service: CRUDService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: PuriDetails = {
    plant_n: '',
    plant_l: '',
    tank_c: 0,
    chlorine_a: 0,
   
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    //   this.Subscription = this.Service.Insert(this.User).subscribe(
    //     (data)=>{
    //       if(data){
    //         console.log(data);
    //       }
    //       else{
    //         console.log("Failed");
    //       }
    //     }
    //   )
    // }

    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.plant_n} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.plant_n} Inserted Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }
  
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
