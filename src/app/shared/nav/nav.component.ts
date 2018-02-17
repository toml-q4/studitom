import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';

@Component({
  selector: 'q4-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Profile', icon: 'fa-id-card',routerLink: ['/profile']},
      {label: 'Settings', icon: 'fa-cog', routerLink: ['/settings']}
    ];
  }
}
