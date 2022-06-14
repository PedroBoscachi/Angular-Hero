import { HeroService } from './../../service/hero.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public getHeroes: any;
  public getHeroId = environment.heroIdURL;
  public heroid: any;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.listHeroes.subscribe(
      res => {
        this.getHeroes = res;
      }
    )
  }

}
