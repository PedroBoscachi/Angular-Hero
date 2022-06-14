import { PagesRoutingModule } from './pages-routing.module';
import { HeroesModule } from './../heroes/heroes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeroPageComponent } from './hero-page/hero-page.component';



@NgModule({
  declarations: [HomeComponent, HeroPageComponent],
  imports: [
    CommonModule,
    HeroesModule,
    PagesRoutingModule
  ],
  exports: [
    HomeComponent,
    HeroPageComponent
  ]
})
export class PagesModule { }
