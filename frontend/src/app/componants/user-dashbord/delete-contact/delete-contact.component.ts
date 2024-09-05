import { Component } from '@angular/core';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrl: './delete-contact.component.css'
})
export class DeleteContactComponent {
   id!:number;
  constructor(private contactService:ContactService){}

  delete(id:number){
    this.contactService.deleteContact(id).subscribe((res)=>
    {
      window.alert("Sucessfully Deleted");
    });
  }


}
