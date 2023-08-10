import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PuriDetails, InsertedSuccess, UniqueConstraintError, LoginDetails, Read } from '../Details';
import { CRUDService } from '../crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(private Service: CRUDService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: LoginDetails = {
    username: '',
    email: '',
    password: ''
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

    this.Subscription = this.Service.InsertU(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.username} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.username} Inserted Succesfully`;
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
