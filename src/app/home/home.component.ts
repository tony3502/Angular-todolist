import { ListserviceService } from './../listservice.service';
import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  notes:Note[]=[];

  constructor(
    private listservice:ListserviceService
  ) { }

  ngOnInit(): void {
    this.listservice.getObs().subscribe(data=>{
      this.notes=data['note'];
    })
  }

  PUTDATA(newdatanote:Note[]):void{
    this.notes=newdatanote;
    this.listservice.postData(this.notes);
  }
  
  

}
