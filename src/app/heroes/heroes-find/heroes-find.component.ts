import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-heroes-find',
  templateUrl: './heroes-find.component.html',
  styleUrls: ['./heroes-find.component.scss']
})
export class HeroesFindComponent implements OnInit {

  @Output() public find: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public findHero(hero: string){
    this.find.emit(hero);
  }
}
