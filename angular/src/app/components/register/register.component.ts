import { Component, OnInit } from '@angular/core';
import { user } from './register.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  User : user;
  
  constructor(private router : Router) { }
  
  ngOnInit() {
    this.User = {
      name : '',
      username : '',
      email : '',
      password : '',
      gender : ''
    }
  }
  registerform(User) {
    if(User.password == User.confirmpassword) {
      console.log(User);
    }else {
      alert('password do not match');
    }
  }

}
