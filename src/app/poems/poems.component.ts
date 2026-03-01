import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadNextPoem } from '../store/poems.actions';
import { selectPoem } from '../store/poems.selector';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.css']
})
export class PoemsComponent implements OnInit {


  currentPoem$ = this.store.select(selectPoem);
  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadNextPoem());
  }

  newPoem() {
    this.store.dispatch(loadNextPoem());
  }

}
