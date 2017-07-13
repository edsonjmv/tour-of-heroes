import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { Router } from '@angular/router';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero: HeroComponent;
  heroes: HeroComponent[];

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: HeroComponent): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  goToDetails(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
