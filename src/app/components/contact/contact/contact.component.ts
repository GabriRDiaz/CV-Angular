import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/service/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact = new Contact();
  constructor() {}

  ngOnInit(): void {
    console.log(this.contact.value);
  }

}
