import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FeatureService } from 'src/app/services/feature.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  // @Output() featureSelcted = new EventEmitter<string>();
  loggedIn: boolean = false;
  @Input() newUser: User = null!;

  constructor(private auth: AuthenticationService, private router: Router, private feature: FeatureService) {}

  ngOnInit(): void {
    this.auth.isLoggedIn().subscribe((value: boolean) => {
      this.loggedIn = value;
      console.log('Logged In Status Change! ', this.loggedIn);
    })
  }

  onSelect(feature: string) {
    this.feature.setValue(feature);
  }

  logout() {
    this.auth.logout();
    this.feature.setValue('home');
  }
}
