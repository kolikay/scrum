import { Scrumuser } from './scrumuser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 



@Injectable({
  providedIn: 'root'
})
export class ScrumdataService {

  constructor(private _http: HttpClient) { }

  _url = 'https://liveapi.chatscrum.com/scrum/api/scrumusers/';
  _loginUrl = 'https://liveapi.chatscrum.com/scrum/api-token-auth/';
  _scrumProjectUrl = 'https://liveapi.chatscrum.com/scrum/api/scrumprojects/';

  public httpOptions = {
    headers: new HttpHeaders({'content-Type':'application/json'})
  }

  signup(user: Scrumuser) {
    return this. _http.post<any>(this._url, {'email': user['email'], 'password':user['password'],
    'full_name':user['fullname'], 'usertype':user['usertype'],'projname':user['projname']}, this.httpOptions);
  }
  Login(user: Scrumuser) {
    return this._http.post<any>(this._loginUrl, {'username': user['email'], 'password':user['password'],'project': user['projname']}, this.httpOptions);
  }
  loggedin() {
    return !!localStorage.getItem('token')
  }

  allProjectGoals(project_id){
    return this._http.get<any>(this._scrumProjectUrl + project_id, this.httpOptions);
  }
}
