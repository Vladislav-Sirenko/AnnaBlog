import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
   toogle = false;
  constructor(private roouter: Router) { }

  ngOnInit() {
  }
  toogleMenu() {
    this.toogle = !this.toogle;
  }

}
