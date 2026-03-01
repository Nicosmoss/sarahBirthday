import { createFeatureSelector } from "@ngrx/store";
import { Poem, PoemsState } from "./poems.reducer";


export const selectPoem = createFeatureSelector<Poem>('poem');

