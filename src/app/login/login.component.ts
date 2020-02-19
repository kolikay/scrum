import { Scrumuser } from './../scrumuser';
import { ScrumdataService } from './../scrumdata.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  scrumUserLoginData = new Scrumuser('','','','','');

  constructor(private _scrumdataService: ScrumdataService, private _router: Router) { }

  ngOnInit(): void {
  }
  onLoginSubmit(){
    this._scrumdataService.Login(this.scrumUserLoginData).subscribe(
      data => {
        console.log('Success', data)
        localStorage.setItem('token', data.token)
        this._router.navigate(['/scrumboard'])
      },
      error => {
        console.log('Error', error)
     }
    ) 
  }
  }


