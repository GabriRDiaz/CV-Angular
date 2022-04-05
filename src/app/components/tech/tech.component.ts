import { Component, OnInit, Input } from '@angular/core';
import {Tech} from '../../service/Tech'

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})

export class TechComponent implements OnInit {
  @Input() tech: Tech = new Tech();

  constructor() {}

  counter(i: Number) {
    return new Array(i);
  }

  ngOnInit(): void {
    console.log(this.tech.name);
  }

}
