import { ScrumdataService } from './../scrumdata.service';
import { Component, OnInit } from '@angular/core';
import { Scrumuser } from '../scrumuser';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  constructor(private _scrumdataService: ScrumdataService ) { }

  ngOnInit(): void {
  }
  userTypes = ['reqular', 'project owner'];
  scrumUserModel = new Scrumuser('','','','','');
  feedbk = '';

  onSubmit(){
    console.log(this.scrumUserModel);
    this._scrumdataService.signup(this.scrumUserModel).subscribe(
      data => {
        console.log('success!', data)
        this.feedbk = 'Account Created Succesfully'
    },
      error => {
        console.error('Error', error)
        this.feedbk = 'Signup Failled'
      }
      )
  }
}