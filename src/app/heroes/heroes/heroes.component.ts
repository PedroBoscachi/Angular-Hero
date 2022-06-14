import { Observable } from 'rxjs';
import { HeroService } from './../../service/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public getHeroes: any;
  public findHero: any;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.listHeroes.subscribe(
      res => {
        this.findHero = res;
        this.getHeroes = this.findHero;
      }
    )
  }

  public findHeroByName(heroName: string){
    const filter = this.findHero.filter( (hero: any) => {
      return !hero.name.toLowerCase().indexOf(heroName.toLowerCase());
    });

    this.getHeroes = filter;
  }

}
