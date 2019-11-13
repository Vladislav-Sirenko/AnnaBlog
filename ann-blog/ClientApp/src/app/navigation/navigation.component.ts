import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private roouter: Router) { }

  element: HTMLElement;
  toogle = false;
  toglesubMenu = false;

  ngOnInit() {
  }
  toggleElement() {
    this.toogle = !this.toogle;
  }
  toggleSubMenu() {
    this.toglesubMenu = !this.toglesubMenu;
  }
  scrollFunc(scrollElement) {

    alert('Текущая прокрутка сверху: ' + window.pageYOffset);
    switch (scrollElement) {
      case 0:  // if (x === 'value1')
        this.element = document.getElementById('home') as HTMLElement;
        break;
      case 1:  // if (x === 'value1')
        this.element = document.getElementById('about-company') as HTMLElement;
        break;

      case 2:  // if (x === 'value2')
        this.element = document.getElementById('scroll') as HTMLElement;
        break;
      case 3:  // if (x === 'value2')
        this.element = document.getElementById('what-offer') as HTMLElement;
        break;
      default:

        break;
    }
    // this.element=document.getElementById('scroll') as HTMLElement;
    this.element.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

}
