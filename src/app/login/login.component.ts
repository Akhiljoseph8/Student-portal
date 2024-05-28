import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){
    
  }
user={
  username:"admin",
  password:"admin123"
}
uname=""
pswd=""
handleLogin(){
  console.log(this.uname,this.pswd)
  if(this.uname==this.user.username && this.pswd ==this.user.password){
    alert("login successful")
  }else{
    alert("login failed")
  }
}
}
