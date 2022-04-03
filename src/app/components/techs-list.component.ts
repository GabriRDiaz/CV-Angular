import { Component, OnInit } from '@angular/core';
import { TechService } from '../service/tech.service';
@Component({
  selector: 'app-techs-list',
  templateUrl: './techs-list.component.html',
  styleUrls: ['./techs-list.component.css']
})
export class TechListComponent implements OnInit {

  Techs:any = [];
  constructor(private techService: TechService) { }
  ngOnInit(): void {
    this.techService.GetTechs().subscribe(res => {
      console.log(res)
      console.log("Hey! LISTEN")
      this.Techs =res;
    });
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.techService.deleteTech(id).subscribe((res) => {
        this.Techs.splice(i, 1);
      })
    }
  }
}
