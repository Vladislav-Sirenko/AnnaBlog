import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Certificate } from './certificate.model';
import { CertificateService } from '../certificate.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  certificates: Certificate[] = [];
  @ViewChild('myInput')
  myInputVariable: ElementRef;
  fileToUpload: File = null;
  constructor(private service: CertificateService) { }

  ngOnInit() {
    this.fileToUpload = null;
    this.service.getAll().subscribe((certificates) => {
      this.certificates = certificates;
    });
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  postFile() {
    this.service.postFile(this.fileToUpload).subscribe(() => {
      alert('Your file has been succesfully added');
    });
    this.fileToUpload = null;
    this.service.getAll().subscribe((certificates) => {
      this.certificates = certificates;
    });
  }

}
