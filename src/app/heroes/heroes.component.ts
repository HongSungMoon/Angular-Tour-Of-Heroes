import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
// 구성요서의 Angular metadata를 지정하는 데코레이터 함수

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  // selectedHero: Hero;

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService) { }
  // 생성자의 매개변수로 받은 변수를 필드로 가지고 있는 것 ??

  ngOnInit() {
    this.getHeroes();
  }

}
