import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InputDecorator} from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-nauka',
  templateUrl: './nauka.component.html',
  styleUrls: ['./nauka.component.css']
})
export class NaukaComponent implements OnInit {

  data = new Date();


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
