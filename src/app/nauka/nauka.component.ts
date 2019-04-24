import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InputDecorator} from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-nauka',
  templateUrl: './nauka.component.html',
  styleUrls: ['./nauka.component.css']
})
export class NaukaComponent implements OnInit {


  informacja = 'TO co ma sie wyswieltic';
  data = new Date();
  tablica = [1, 2, 3, 4];

  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  @Input() hero = [];

  @Output()
  eventHero = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  metoda() {
    return this.data;
  }


}
