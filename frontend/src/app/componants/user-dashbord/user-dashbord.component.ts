import { Component } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';



@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrl: './user-dashbord.component.css'
})
export class UserDashbordComponent {
  home: string = 'Home';
  username: String = 'krishna';
  logout: string = 'Logout';

  constructor(private userService: UserService ) {}

  ngOnInit(): void {
    const user = this.userService.getUser();
    if (user) {
      this.username = user.username; // Assuming 'username' is a property of User
    }
    console.log("here is the after log user name: "+this.username);
  }

  logoutUser(): void {
    this.userService.logout();
    window.location.href = '/login'; // Redirect to login page after logout
  }
}