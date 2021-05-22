import { Component, OnDestroy, OnInit } from '@angular/core';
import { APIResponse, Game } from "../../domains/models";
import { HttpService } from "../../services/http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort = '';
  public games: Array<Game> = [];
  private gameSubscription = Subscription.EMPTY;
  private routeSubscription = Subscription.EMPTY;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    });
  }


  searchGames(sort: string, search?: string) {
    this.gameSubscription = this.httpService.getGameList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(this.games);

      })
  }

  openGameDetails(id: number) {
    this.router.navigate(['details', id]).then(r => console.log(r));
  }

  ngOnDestroy(): void {
    this.routeSubscription ? this.routeSubscription.unsubscribe() : null;
    this.gameSubscription ? this.gameSubscription.unsubscribe() : null;
  }
}
