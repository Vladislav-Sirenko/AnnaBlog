import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Output() Admin_registration=new EventEmitter
  constructor() { }

  ngOnInit() {
    this.Admin_registration.emit('hello from Admin');
  }

}
