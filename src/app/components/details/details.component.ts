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
  gameRatings = 0;
  game!: Game;
  routeSubscription: Subscription = Subscription.EMPTY;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({game}) => {
      this.game = game;
      console.log(this.game)
    })

    setTimeout(() => {
      this.gameRatings = this.game.metacritic;
    }, 1000)
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

  ngOnDestroy(): void {
    this.routeSubscription ? this.routeSubscription.unsubscribe() : null;
  }


}
