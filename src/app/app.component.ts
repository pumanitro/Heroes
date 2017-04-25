import {Component, OnInit} from '@angular/core';
import {Hero} from './Hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{
  title = 'Tour of heroes';
  hero: Hero = {
    id: 1,
    name: 'Spiderman'
  };
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
    this.selectedHero = this.heroes[0];
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

