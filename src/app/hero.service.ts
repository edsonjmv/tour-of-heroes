import { Injectable } from '@angular/core';

import { HeroComponent } from './hero/hero.component';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<HeroComponent[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<HeroComponent[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<HeroComponent> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
}
