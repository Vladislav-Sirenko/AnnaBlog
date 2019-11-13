import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Art } from './art.model';
import { ArtsService } from '../arts.service';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {

  @ViewChild('myInput')
  myInputVariable: ElementRef;
  private noOfItemsToShowInitially = 5;
  // itemsToLoad - number of new items to be displayed
  private itemsToLoad = 5;
  toggle = false;
  fileToUpload: File = null;
  files: File[] = [];
  thecontents: string;
  trips: Art[] = [];
  itemsToShow: Art[] = [];
  // No need to call onScroll if full list has already been displayed
  public isFullListDisplayed = false;

  constructor(private service: ArtsService) { }


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

  post() {
    if (this.thecontents) {
      this.service.postTrip(new Art(this.thecontents)).subscribe((id: number) => {
        if (this.fileToUpload) { this.files.push(this.fileToUpload); }
        this.service.postFile(this.files, id).subscribe();
        this.fileToUpload = null;
        this.myInputVariable.nativeElement.value = '';
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
