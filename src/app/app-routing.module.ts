import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  // /:id는 id 자리에 특정 hero id가 오는 것을 의미 - 파라미터 ?
  { path: '', redirectTo: ' dashboard', pathMatch: 'full' }
  // pathMatch: 'full' 은 경로가 완전히 같을 때를 의미!
];

@NgModule(
  {
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
