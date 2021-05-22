import { Component, OnDestroy, OnInit } from '@angular/core';
import { Game } from "../../domains/models";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  gameRatings= 0;
  // gameId = 0;
  game!: Game;
  // gameSubscription: Subscription = Subscription.EMPTY;
  routeSubscription: Subscription = Subscription.EMPTY;

  // constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) {
  // }

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({game}) => {
      this.game = game;
      this.gameRatings = this.game.metacritic;

    })
  }

  ngOnInit(): void {
    // this.routeSubscription = this.activatedRoute.params.subscribe((params: Params) => {
    //   this.gameId = params['id'];
    //   this.getGameDetails(this.gameId);
    // })
  }

  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432';
    } else if (value > 50) {
      return '#fffa50';
    } else if (value > 30) {
      return '#f7aa38';
    } else {
      return '#ef4655'
    }
  };

  // getGameDetails(id: number): void {
  //   this.gameSubscription = this.httpService.getGameDetails(id).subscribe((game: Game) => {
  //     this.game = game;
  //
  //     setTimeout(() => {
  //       this.gameRating = this.game?.metacritic;
  //     }, 1000)
  //   })
  // }

  ngOnDestroy(): void {
    this.routeSubscription ? this.routeSubscription.unsubscribe() : null;
    // this.gameSubscription ? this.gameSubscription.unsubscribe() : null;
  }


}
