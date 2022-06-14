import { environment } from './../../../environments/environment';
import { HeroService } from './../../service/hero.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent implements OnInit {

  private apiIdUrl = environment.heroIdURL;
  public hero: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.getHero
    /* const id = this.activatedRoute.snapshot.params['id'];
    const hero = this.heroService.buscarPorId(`${this.apiIdUrl}/${id}`).subscribe(
      res => {
        this.hero = res;
      }
    ); */
  }

  get getHero() {
    const id = this.activatedRoute.snapshot.params['id'];
    return this.heroService.buscarPorId(`${this.apiIdUrl}/${id}.json`).subscribe(
      res => {
        this.hero = res;
      }
    );
  }

}
