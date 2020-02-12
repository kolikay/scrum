import { Component, OnInit } from '@angular/core';
import { Scrumuser } from '../scrumuser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userTypes = ['reqular', 'project owner'];
  scrumUserModel = new Scrumuser('john doe','johndoe@gmail.com','testing123','reqular user');
}
