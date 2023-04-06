import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css'],
})
export class BlogFormComponent implements OnInit {
  form!: FormGroup;
  users: any[] | undefined;
  categories!: any[];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: '',
      title: '',
      content: '',
      links: '',
      status: true,
      user: this.formBuilder.group({
        id: '',
      }),
      category: this.formBuilder.group({
        id: '',
      }),
    });

    this.getUsers();
    this.getCategories();
  }

  getUsers() {
    this.http
      .get<any[]>('http://localhost:8080/api/users')
      .subscribe((data) => {
        this.users = data;
      });

      return this.users;
  }
  getCategories() {
    this.http
      .get<any[]>('http://localhost:8080/api/categories')
      .subscribe((data) => {
        this.categories = data;
      });
      return this.categories;
  }
  onSubmit() {
    let postData = this.form.value;
    console.log(postData);
    this.http
      .post('http://localhost:8080/api/post/create', postData)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
