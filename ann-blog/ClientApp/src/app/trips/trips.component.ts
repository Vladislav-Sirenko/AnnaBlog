import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TripsService } from '../trips.service';
import { Trip } from './trip.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  @ViewChild('myInput')
  myInputVariable: ElementRef;
  @ViewChild('myInputOne')
  myInputVariableOne: ElementRef;
  @ViewChild('myInputTwo')
  myInputVariableTwo: ElementRef;
  fileToUpload: File = null;
  fileToUpload1: File = null;
  fileToUpload2: File = null;
  files: File[] = [];
  thecontents: string;
  trips$: Observable<Trip[]>;
  constructor(private service: TripsService) { }

  ngOnInit() {
    this.trips$ = this.service.getAll();
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.files.push(this.fileToUpload);
  }

  post() {
    if (this.thecontents) {
      this.service.postTrip(new Trip(this.thecontents, null, null)).subscribe((id: number) => {
        this.service.postFile(this.files, id).subscribe();
        this.trips$ = this.service.getAll();
      });
    }
  }
}
