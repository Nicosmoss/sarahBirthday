import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PoemService } from "../poems/poem.service";
import { loadNextPoem, loadNextPoemSuccess } from "./poems.actions";
import { map, of, switchMap } from "rxjs";


@Injectable()
export class PoemsEffects {

  constructor(private actions$: Actions, private poemsService: PoemService) {

  }

  loadNextPoem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadNextPoem),
      switchMap(() =>
        of(loadNextPoemSuccess({
          poem: this.poemsService.getNextPoem()
        })
        )
      )
    )
  })
}
