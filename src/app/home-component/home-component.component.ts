import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  @Output()
  moveToPoem = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

}
