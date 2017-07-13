import { Component, Input } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent {
  @Input() hero: HeroComponent;
}
