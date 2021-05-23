import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { DetailsComponent } from "./components/details/details.component";
import { DetailsResolver } from "./components/game-tabs/details.resolver";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Home Page - Game Finder'}},
  {path: 'search/:game-search', component: HomeComponent, data: {title: 'Search Video Game - Game Finder'}},
  {path: 'details/:id', component: DetailsComponent, resolve: {game: DetailsResolver}},
  {path: 'not-found', component: NotFoundComponent, data: {title: 'Not Found - Game Finder'}},
  {path: '**', redirectTo: "/not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
