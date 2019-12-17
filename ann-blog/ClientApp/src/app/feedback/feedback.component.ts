import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FeedbackModel } from '../feedbackModel.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  public close_form = false;
  public show_form = false;
  email: string;
  phone: string;
  text: string;
  constructor(private service: ContactService) { }

  ngOnInit() {
  }
  sendFeedback() {
    this.close_form = !this.close_form;
    this.service.sendFeedback(new FeedbackModel(this.email, this.phone, this.text)).subscribe(() => {
      this.email = '';
      this.phone = '';
      this.text = '';
      this.show_form = !this.show_form;
      // alert('Ваш отзыв успешно оставлен');
    });

  }

}
