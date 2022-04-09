import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts:any = [];
  constructor(private contactService: ContactService) { }
  ngOnInit(): void {
    this.contactService.GetContacts().subscribe(res => {
      this.contacts =res;
    });
    console.log(this.contacts);
  }

}
