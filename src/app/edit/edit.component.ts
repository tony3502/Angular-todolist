
import { Note } from './../note';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { v4 as uuidv4, v4 } from "uuid";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  @Input() notes: Note[]= [];

  @Output() newItemEvent = new EventEmitter<Note[]>();
  
  constructor() { }

  ngOnInit(): void { }
  
  /*add(note_:string,date_:string):void{
    if(note_!=""){
      let newnote:Note={note:note_,date:date_};
      this.notelist.unshift(newnote)
      console.log(this.notelist);
    }
  }*/

  addData(form:NgForm):void{
    const newnotedata:Note={id:v4(),note:form.value.newnote,date:form.value.newdate};
    this.notes.push(newnotedata);
    this.newItemEvent.emit(this.notes);
    
  }
  
}
