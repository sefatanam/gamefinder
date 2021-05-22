import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { HttpService } from "../../services/http.service";
import { Game } from "../../domains/models";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DetailsResolver implements Resolve<Game> {
  gameId = 0;

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Game> | Promise<Game> | Game {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['id'];
    })

    return this.httpService.getGameDetails(this.gameId).pipe(
      catchError(() => {
        this.router.navigateByUrl('/not-found').then(r => console.log);
        return EMPTY;
      })
    )
  }
}
