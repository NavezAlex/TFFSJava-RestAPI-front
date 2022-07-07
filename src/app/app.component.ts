import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map,Observable } from 'rxjs';
import { F_login } from './forms/login.form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TFFSJava-RestAPI-front';
  loginForm = new FormGroup(F_login);
  
  constructor(private $http: HttpClient){
   }
  
  handleLoginForm(){
    if(this.loginForm.valid){
      this.$http.post(
        "http://localhost:8080/signin", 
        this.loginForm.value).pipe(map((d: any) => d.token)).subscribe(data => console.log(data.token));
    }
  }
}
