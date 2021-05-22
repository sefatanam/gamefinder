import { Component, OnInit } from '@angular/core';
import { APIResponse, Game } from "../../domains/models";
import { HttpService } from "../../services/http.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort = '';
  public games: Array<Game> = [];

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    });
  }


  searchGames(sort: string, search?: string) {
    this.httpService.getGameList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        console.log(gameList);
        this.games = gameList.results;
      })
  }

}
