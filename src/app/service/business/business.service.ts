import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Business } from '../../interfaces/business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {


  baseUrl = 'https://p-neighbourhood.herokuapp.com';
  getAllBusinesses = 'https://p-neighbourhood.herokuapp.com/api/business'
  updateBusiness = 'https://p-neighbourhood.herokuapp.com/api/business/update'
  deleteBusiness = 'https://p-neighbourhood.herokuapp.com/api/business/delete'

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Business[]> {
    return this.http.get<Business[]>(this.baseUrl)
    console.log(this.http.get<Business[]>(this.baseUrl))
  }

  create(business:any){
    return this.http.post(this.baseUrl, business)
  }

  update(id:any, business:any){
    return this.http.put(`${this.updateBusiness}${id}/`, business)
  }

  delete(id:any): Observable<any>{
    return this.http.delete(`${this.deleteBusiness}${id}`)
  }
}
