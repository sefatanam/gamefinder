import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { forkJoin, Observable } from "rxjs";
import { environment as env } from "../../environments/environment";
import { APIResponse, Game } from "../domains/models";
import { map } from "rxjs/operators";
import { LoadingService } from "./loading.service";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private loadingService: LoadingService) {
  }

  getGameList(ordering: string, search?: string): Observable<APIResponse<Game>> {
    this.loadingService.setLoading();
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams()
        .set('ordering', ordering).set('search', search)
    }
    this.loadingService.offLoading();
    const data = this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params
    });

    return data;
  }


  getGameDetails(id: number): Observable<Game> {
    this.loadingService.setLoading();
    const gameInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`);

    const gameTrailerRequest = this.http.get(`${env.BASE_URL}/games/${id}/movies`);

    const gameScreenshotsRequest = this.http.get(`${env.BASE_URL}/games/${id}/screenshots`);

    const data = forkJoin({
      gameInfoRequest,
      gameTrailerRequest,
      gameScreenshotsRequest
    }).pipe(
      map((res: any) => {
        this.loadingService.offLoading();
        return {
          ...res['gameInfoRequest'],
          trailers: res['gameTrailerRequest']?.results,
          screenshots: res['gameScreenshotsRequest']?.results
        }
      })
    )
    return data;

  }
}
