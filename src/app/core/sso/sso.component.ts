import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/operators/mergeMap';

@Component({
  selector: 'q4-sso',
  templateUrl: './sso.component.html',
  styleUrls: ['./sso.component.scss']
})
export class SsoComponent implements OnInit {

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryStrings => {
      const jwt = queryStrings['jwt'];
      this.authService.token = jwt;
    });
  }
}
