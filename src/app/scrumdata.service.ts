import { Scrumuser } from './scrumuser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 



@Injectable({
  providedIn: 'root'
})
export class ScrumdataService {

  constructor(private _http: HttpClient) { }

  _url = 'https://liveapi.chatscrum.com/scrum/api/scrumusers/'

  public httpOptions = {
    headers: new HttpHeaders({'content-Type':'application/json'})
  }

  signup(user: Scrumuser) {
    return this. _http.post<any>(this._url, {'email': user['email'], 'password':user['password'],
    'full_name':user['fullname'], 'usertype':user['usertype'],'projname':user['projname']}, this.httpOptions);
  }
}
