import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { filter, map } from "rxjs/operators";
import { LoadingService } from "./services/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoading = false;

  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute, private loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.loadingService.isLoading.subscribe((data) => this.isLoading = data);

    const appTitle = this.titleService.getTitle();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        if (child?.snapshot?.data?.title) {
          return child?.snapshot?.data?.title;
        }
        return appTitle;
      })
    ).subscribe((title: string) => this.titleService.setTitle(title))
  }

}
