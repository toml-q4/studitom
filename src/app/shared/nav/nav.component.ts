import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'q4-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  responsive = false;
  constructor() { }

  ngOnInit() {
  }

  show() {
    this.responsive = !this.responsive;
  }

}
