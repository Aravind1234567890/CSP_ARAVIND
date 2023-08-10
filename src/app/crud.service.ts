import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  PuriDetails,
  LoginDetails,
  UniqueConstraintError,
} from './Details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  login(username: String) {
    throw new Error('Method not implemented.');
  }
  
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });


  FoodHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '9d95c08d75mshae57f7f480c131ap1443f3jsn5525ed1bd303',
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
  });


  
  private url = 'http://localhost:4800/';

  Insert(
    Details: PuriDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'purification/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(plant_n: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}purification/Read${plant_n}`);
  }
  Delete(plant_n: String): Observable<InsertedSuccess> {
    console.log(`${this.url}purification/Delete${plant_n}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}purification/Delete${plant_n}`
    );
  }
  Update(plant_n: String, Details: PuriDetails) {
    return this.http.put(`${this.url}purification/Update${plant_n}`, Details, {
      headers: this.headers,
    });
  }
  ReadU(username: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}login/Read${username}`);
  }
  InsertU(
    Details: LoginDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'login/Insert',
      Details,
      { headers: this.headers }
    );
  }

}