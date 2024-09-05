import { Component } from '@angular/core';
import { Contact } from '../../contact';
import { ContactService } from '../../contact.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
  styleUrl: './show-contact.component.css'
})
export class ShowContactComponent {

home= "Home"; 
username="krishna";
logout="logout";

id!:number;
contact:Contact = new Contact();

constructor(private contactservice:ContactService){}

contacts: Contact[] = [];  // Define the array to hold your contacts

ngOnInit(): void {
  this.contactservice.showContact().subscribe(
    (data: Contact[]) => {
      this.contacts = data;  // Assign the data to the component property
      console.log(this.contacts);  // Optional: Log to verify data is received
      console.log("ts working for showcontact");
    },
    (error) => {
      console.error('Error fetching contacts', error);
    }
  );
}

delete(id: number): void {
  if (id === undefined || id === null) {
    window.alert('Invalid contact ID');
    return;
  }

  this.contactservice.deleteContact(id).subscribe(
    (res) => {
      window.alert('Successfully Deleted');
    },
    (error: HttpErrorResponse) => {
      window.alert('Error deleting contact: ' + error.message);
    }
  );
}
}
