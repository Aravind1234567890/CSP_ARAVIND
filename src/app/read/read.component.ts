import { Component, OnInit } from '@angular/core';
import { InsertedSuccess, PuriDetails, Read } from '../Details';
import { CRUDService } from '../crud.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: CRUDService) {}
  Roll: String = '';
  GotResult: Boolean = false;
  UpdatedUser: PuriDetails = {
    plant_n: '',
    plant_l: '',
    tank_c: 0,
    chlorine_a: 0,
    
  };
  Results = [];
  Read(Roll: String) {
    this.Service.Read(Roll).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(plant_n: String, Details: PuriDetails) {
    this.Service.Update(plant_n, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(plant_n: String) {
    this.Service.Delete(plant_n).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read('All');
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
}
