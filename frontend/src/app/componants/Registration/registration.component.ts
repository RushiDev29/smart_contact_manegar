import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
user:User = new User();
constructor(private userservice:UserService){}

     // Here is save method..
saveUser(){
  if(this.user.username && this.user.emailid && this.user.name && this.user.password){
  this.userservice.saveUser(this.user).subscribe((data)=>{
    alert("Register Successfully !!");
  
    return data;
    
  })
}
else
{
  window.alert("All filds Required !!");
  window.location.reload;

}

}
}
