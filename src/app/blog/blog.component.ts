import { Component } from '@angular/core';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  blogs = [];

  constructor(private blogService: BlogService) {
    this.blogService.getBlogs().subscribe((data: any) => {
      this.blogs = data;
      console.log(this.blogs);
    }
    );
  }
}
