import { createAction, props } from "@ngrx/store";
import { Poem } from "./poems.reducer";


export const loadNextPoem = createAction(
  "[Poems] Load Poems"
);

export const loadNextPoemSuccess = createAction(
  "[Poems] Load Poems Success",
  props<{ poem:Poem}>()
)

