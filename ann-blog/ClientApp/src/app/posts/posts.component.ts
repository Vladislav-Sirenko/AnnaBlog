import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from './post.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  thecontents: string;
  posts: Post[] = [];
  itemsToShow: Post[];
  title: string;
  admin: boolean;
  noOfItemsToShowInitially = 5;
  itemsToLoad = 5;
  toggle = false;

  constructor(private service: PostsService, private authService: UserService) { }

  ngOnInit() {
    if (localStorage.getItem('email') && localStorage.getItem('password')) {
      this.authService.checkAdmin().subscribe((isAdmin: boolean) => {
        this.admin = isAdmin;
      });
    }
    this.service.getAll(0).subscribe(trips => {
      this.posts = trips;
      this.itemsToShow = this.posts;
    });
  }
  admin_toggle() {
    this.toggle = !this.toggle;
  }
  remove(id: number) {
    this.service.removeTrip(id).subscribe(() => {
      this.itemsToShow.splice(this.itemsToShow.findIndex(x => x.id === id), 1);
      alert('Успешно удалено');
    });
  }
  post() {
    if (this.thecontents) {
      const post = new Post(this.thecontents, this.title);
      this.service.postTrip(post).subscribe(() => {
        this.itemsToShow.unshift(post);
        this.thecontents = '';
        this.title = '';
        alert('Успешно создано');
      });
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
