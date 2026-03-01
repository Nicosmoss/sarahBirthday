import { Injectable } from '@angular/core';
import { title } from 'process';
import { Poem } from '../store/poems.reducer';

@Injectable({
  providedIn: 'root'
})
export class PoemService {

   poems:Poem[] = [
    {
      title:"myTitle",
      author:"myAUthor",
      poem:"MyPoem"
    },
     {
       title: "second2",
       author: "scoaazc",
       poem: "MyPodazdddazdaem"
     },

  ]

  private index:number = 0;

  getNextPoem(){
    let currIndex = this.index;
    this.index = (this.index + 1) % this.poems.length;
    return this.poems[currIndex];
  }
  constructor() { }
}
