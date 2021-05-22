import { Component, Input, OnInit } from '@angular/core';
import { Game } from "../../domains/models";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {

  @Input() game!: Game;

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.game?.name} - Game Finder`);
  }

}
