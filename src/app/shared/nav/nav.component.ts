import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'q4-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  items: MenuItem[];
  isLoggedIn = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.items = [
      {label: 'Profile', icon: 'fa-id-card', routerLink: ['/profile']},
      {label: 'Settings', icon: 'fa-cog', routerLink: ['/settings']}
    ];

    this.isLoggedIn = this.authService.isLoggedIn;
  }
}
