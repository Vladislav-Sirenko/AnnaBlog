import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from './post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  thecontents: string;
  posts: Post[] = [];
  itemsToShow: Post[];
  noOfItemsToShowInitially = 5;
  itemsToLoad = 5;
  toggle = false;

  constructor(private service: PostsService) { }

  ngOnInit() {
    this.service.getAll(0).subscribe(trips => {
      this.posts = trips;
      this.itemsToShow = this.posts;
    });
  }
  admin_toggle() {
    this.toggle = !this.toggle;
  }
  post() {
    if (this.thecontents) {
      this.service.postTrip(new Post(this.thecontents)).subscribe();
    }
  }
  onScroll() {
    this.service.getAll(this.noOfItemsToShowInitially).subscribe(trips => {
      this.posts = trips;
      this.itemsToShow.push.apply(this.itemsToShow, this.posts);
    });
    this.noOfItemsToShowInitially += this.itemsToLoad;
  }
}
