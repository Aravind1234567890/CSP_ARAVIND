import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  InsertedSuccess,
  PuriDetails,
  LoginDetails,
  UniqueConstraintError,
  Read,
} from '../Details';
import { Subscription } from 'rxjs';
import { CRUDService } from '../crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private Service: CRUDService, private router: Router) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  a = [];
  Results=[];
  GotResult:boolean=false;

  UserName: String = '';
  Password: String = '';
Log: LoginDetails = {
  username: '',
  password: '',
  email: '',
};

  Read() {
    
    this.Service.ReadU(this.Log.username).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        console.log("after result");
        this.GotResult = true;
        console.log(this.Results[0]);
        this.a=this.Results[0];
        console.log(this.a[3]);
        
        if(this.Log.password==this.a[3]){
          this.router.navigate(['/menu']);
          console.log("hi");
        }
        else{
          alert('invalid username or pasword');
          console.log("hi");
        }
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
}