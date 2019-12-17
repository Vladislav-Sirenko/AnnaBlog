import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Art } from './art.model';
import { ArtsService } from '../arts.service';
import { UserService } from '../user.service';

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
  public preloader = true;
  title: string;
  toggle = false;
  admin: boolean;
  fileToUpload: File = null;
  files: File[] = [];
  thecontents: string;
  trips: Art[] = [];
  itemsToShow: Art[] = [];
  // No need to call onScroll if full list has already been displayed
  public isFullListDisplayed = false;

  constructor(private service: ArtsService, private authService: UserService) {
  }


  ngOnInit() {
    if (localStorage.getItem('email') && localStorage.getItem('password')) {
      this.authService.checkAdmin().subscribe((isAdmin: boolean) => {
        this.admin = isAdmin;
      });
    }
    this.service.getAll(0).subscribe(trips => {
      this.trips = trips;
      this.itemsToShow = this.trips;
      this.preloader = false;
    });
  }
  admin_toggle() {
    this.toggle = !this.toggle;
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  remove(id: number) {
    this.service.removeTrip(id).subscribe(() => {
      this.itemsToShow.splice(this.itemsToShow.findIndex(x => x.id === id), 1);
      alert('Успешно удалено из базы данных');
    });
  }

  post() {
    if (this.thecontents) {
      const art = new Art(this.thecontents, this.title);
      this.service.postTrip(art).subscribe((id: number) => {
        if (this.fileToUpload) { this.files.push(this.fileToUpload); }
        this.service.postFile(this.files, id).subscribe();
        this.fileToUpload = null;
        this.title = '';
        this.thecontents = '';
        this.myInputVariable.nativeElement.value = '';
        this.files = [];
        this.itemsToShow.unshift(art);
        alert('Успешно добавлено');
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
