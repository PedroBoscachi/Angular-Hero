import { RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesHeaderComponent } from './heroes-header/heroes-header.component';
import { HeroesFooterComponent } from './heroes-footer/heroes-footer.component';



@NgModule({
  declarations: [HeroesComponent, HeroesHeaderComponent, HeroesFooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeroesComponent,
    HeroesFooterComponent,
    HeroesHeaderComponent
  ]
})
export class HeroesModule { }
