import { RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesHeaderComponent } from './heroes-header/heroes-header.component';
import { HeroesFooterComponent } from './heroes-footer/heroes-footer.component';
import { HeroesFindComponent } from './heroes-find/heroes-find.component';



@NgModule({
  declarations: [HeroesComponent, HeroesHeaderComponent, HeroesFooterComponent, HeroesFindComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeroesComponent,
    HeroesFooterComponent,
    HeroesHeaderComponent,
    HeroesFindComponent
  ]
})
export class HeroesModule { }
