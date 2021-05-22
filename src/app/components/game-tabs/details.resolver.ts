import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { HttpService } from "../../services/http.service";
import { Game } from "../../domains/models";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DetailsResolver implements Resolve<Game> {
  constructor(private httpService: HttpService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Game> | Promise<Game> | Game {
    const {id} = route.params;
    return this.httpService.getGameDetails(id).pipe(
      catchError(() => {
        this.router.navigateByUrl('/not-found').then(r => console.log);
        return EMPTY;
      })
    )
  }
}
