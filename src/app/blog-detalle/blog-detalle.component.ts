import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../service/blog.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog-detalle',
  templateUrl: './blog-detalle.component.html',
  styleUrls: ['./blog-detalle.component.css'],
})
export class BlogDetalleComponent {
  blogs: any = {};

  constructor(
    private activeRoute: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {
    this.activeRoute.params.subscribe((params) => {
      const id = params['id'];
      console.log(id);
      this.blogService.getBlog(id).subscribe((data) => {
        this.blogs = data;
        console.log(this.blogs);
      }
      );
    });
  }


  goBack() {
    window.history.back();
  }
  goEdit() {
    this.router.navigate(['/blogedit']);
  }

}
