import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({ // -> a decorator function that specifies the Angular metadata for the component.
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello world!';

  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {
    
  }
  
  ngOnInit() { //a life-cycle hook. This will run when the component is initialized

  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }


}
