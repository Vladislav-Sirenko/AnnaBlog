import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TripsService } from '../trips.service';
import { Trip } from './trip.model';

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
  toggle = false;
  public isFullListDisplayed = false;
  fileToUpload: File = null;
  fileToUpload1: File = null;
  fileToUpload2: File = null;
  files: File[] = [];
  thecontents: string;
  trips: Trip[] = [];
  itemsToShow: Trip[] = [];
  // No need to call onScroll if full list has already been displayed
  constructor(private service: TripsService) { }

  ngOnInit() {
    this.service.getAll(0).subscribe(trips => {
      this.trips = trips;
      this.itemsToShow = this.trips;
    });
  }
  admin_toggle() {
    this.toggle = !this.toggle;
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  handleFileInput1(files: FileList) {
    this.fileToUpload1 = files.item(0);
  }
  handleFileInput2(files: FileList) {
    this.fileToUpload2 = files.item(0);
  }

  post() {
    if (this.thecontents) {
      this.service.postTrip(new Trip(this.thecontents)).subscribe((id: number) => {
        if (this.fileToUpload) { this.files.push(this.fileToUpload); }
        if (this.fileToUpload1) { this.files.push(this.fileToUpload1); }
        if (this.fileToUpload2) { this.files.push(this.fileToUpload2); }
        this.service.postFile(this.files, id).subscribe();
        this.fileToUpload = null;
        this.fileToUpload1 = null;
        this.fileToUpload2 = null;
        this.myInputVariable.nativeElement.value = '';
        this.myInputVariableOne.nativeElement.value = '';
        this.myInputVariableTwo.nativeElement.value = '';
        this.files = [];
      });
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
