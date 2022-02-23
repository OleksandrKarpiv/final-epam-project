import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  search: string = "";

  @Output() onChanged = new EventEmitter<string>();

  constructor() { }

  
  ngOnInit(): void {
  }

  change() {
    this.onChanged.emit(this.search)
  }

}
