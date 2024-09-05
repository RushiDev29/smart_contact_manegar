import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user:User = new User;
  constructor(private router:Router, private userService:UserService){}

  username: string ='' ;
  password: string ='';

  login(): void {
    console.log("Attempting login...");
    this.userService.loginUser(this.username,this.password).subscribe(
      response => {
        window.alert("Login Successful");
        // Redirect to the dashboard or home page
        this.router.navigateByUrl('/userdashbord'); 
      },
      error => {
        // Display error message
        alert('Login failed : ' + ( 'Please check your details'));
        // Refresh the page
        window.location.reload(); 
      }
    );
  }
  
}