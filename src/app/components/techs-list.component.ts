import { Component, OnInit } from '@angular/core';
import { TechService } from '../service/tech.service';
import { Tech } from '../service/Tech';
import { find } from 'rxjs/operators';
@Component({
  selector: 'app-techs-list',
  templateUrl: './techs-list.component.html',
  styleUrls: ['./techs-list.component.css']
})
export class TechListComponent implements OnInit {

  techs:any = [];
  constructor(private techService: TechService) { }
  ngOnInit(): void {
    this.techService.GetTechs().subscribe(res => {
      this.techs =res;
    });
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.techService.deleteTech(id).subscribe((res) => {
        this.techs.splice(i, 1);
      })
    }
  }
}
