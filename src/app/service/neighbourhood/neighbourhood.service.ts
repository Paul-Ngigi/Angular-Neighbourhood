import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs'
import { Neighbourhood } from '../../interfaces/neighbourhood'

const url = 'https://p-neighbourhood.herokuapp.com/api/neighbourhood/'
const updateUrl = 'https://p-neighbourhood.herokuapp.com/api/neighbourhood/update/'
const deleteUrl = 'https://p-neighbourhood.herokuapp.com/api/neighbourhood/delete/'

@Injectable({
  providedIn: 'root'
})
export class NeighbourhoodService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    console.log(this.http.get(url))
    return this.http.get(url)
  }

  create(neighbourhood: { name: string, business_name: string, business_email: string, admin: any, neighbourhood: any }) {
    return this.http.post(url, neighbourhood)
  }

  update(id: any, neighbourhood: any) {
    return this.http.put(`${updateUrl}${id}/`, neighbourhood)
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${deleteUrl}${id}`)
  }
}
