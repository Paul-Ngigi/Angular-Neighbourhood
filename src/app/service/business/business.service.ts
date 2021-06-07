import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Business } from '../../interfaces/business';

const url = 'https://p-neighbourhood.herokuapp.com/api/business/'
const updateUrl = 'https://p-neighbourhood.herokuapp.com/api/business/update'
const deleteUrl = 'https://p-neighbourhood.herokuapp.com/api/business/delete'

@Injectable({
  providedIn: 'root'
})

export class BusinessService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    console.log(this.http.get(url))
    return this.http.get(url)
  }

  create(business: { name: string, business_name: string, business_email: string, admin: any, neighbourhood: any }) {
    return this.http.post(url, business)
  }

  update(id: any, business: any) {
    return this.http.put(`${updateUrl}${id}/`, business)
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${deleteUrl}${id}`)
  }
}
