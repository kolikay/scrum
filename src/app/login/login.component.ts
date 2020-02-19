import { Scrumuser } from './../scrumuser';
import { ScrumdataService } from './../scrumdata.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  scrumUserLoginData = new Scrumuser('','','','','');

  constructor(private _scrumdataService: ScrumdataService) { }

  ngOnInit(): void {
  }
  onLoginSubmit(){
    this._scrumdataService.Login(this.scrumUserLoginData).subscribe(
      data =>console.log('success!', data),
      error =>console.error('Error!', error)
      )
  }
  }


