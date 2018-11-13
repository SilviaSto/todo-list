import { Component, OnInit } from '@angular/core';

@Component({ // ->is a decorator function that specifies the Angular metadata for the component.
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  constructor() { }

  ngOnInit() { //a life-cycle hook and this will run when the component is initialized
  }

}
