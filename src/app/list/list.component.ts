import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../note';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() notes:Note[]=[];
  @Output() delnote= new EventEmitter<Note[]>();

  constructor(){ }

  ngOnInit(): void {
    
  }

  delData(id:string):void{
    this.notes=this.notes.filter(data=>data.id!=id);
    this.delnote.emit(this.notes);
  }
  

}
