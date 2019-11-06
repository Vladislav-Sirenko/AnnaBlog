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
  private noOfItemsToShowInitially = 5;
  // itemsToLoad - number of new items to be displayed
  private itemsToLoad = 5;
  fileToUpload: File = null;
  fileToUpload1: File = null;
  fileToUpload2: File = null;
  files: File[] = [];
  thecontents: string;
  trips: Trip[] = [];
  itemsToShow: Trip[] = [];
  // No need to call onScroll if full list has already been displayed
  public isFullListDisplayed = false;
  constructor(private service: TripsService) { }

  ngOnInit() {
    this.service.getAll(0).subscribe(trips => {
      this.trips = trips;
      this.itemsToShow = this.trips;
    });
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.files.push(this.fileToUpload);
  }

  post() {
    for (let index = 0; index < 100; index++) {
      if (this.thecontents) {
        this.service.postTrip(new Trip(this.thecontents, null, null)).subscribe((id: number) => {
          this.service.postFile(this.files, id).subscribe();
        });
      }
    }
  }
  onScroll() {
    this.service.getAll(this.noOfItemsToShowInitially).subscribe(trips => {
      this.trips = trips;
      this.itemsToShow.push.apply(this.itemsToShow, this.trips);
    });
    this.noOfItemsToShowInitially += this.itemsToLoad;
  }
}
