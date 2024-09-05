import { Component } from '@angular/core';
import { Contact } from '../../contact';
import { ContactService } from '../../contact.service';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
home= "Home";
username="";
logout="logout";

contact:Contact = new Contact;
constructor(private contactService:ContactService){}

saveContact(){
  console.log("come to ts add file");
  this.contactService.saveContact(this.contact).subscribe(
    (response: Contact) => {
      window.alert('Contact saved successfully');
      // Access specific fields if needed, e.g., response.name
    },
    (error) => {
      console.error('Error saving contact:', error);
    }
  );
  window.location.reload();
  
}

}
