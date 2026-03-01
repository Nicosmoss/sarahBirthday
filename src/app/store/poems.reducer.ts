import { createReducer , on} from "@ngrx/store";
import { loadNextPoem, loadNextPoemSuccess } from "./poems.actions";
import { state } from "@angular/animations";


export interface PoemsState{
  index:number;
  currentPoem:Poem;
}

export interface Poem {
  title:string;
  author:string;
  poem:string;
}

const initialState:Poem = {
    title:"loading",
    author:"loading",
    poem:"loading",

};

export const poemsReducer = createReducer(
  initialState,
  on( loadNextPoemSuccess, (state, { poem }) => poem));
