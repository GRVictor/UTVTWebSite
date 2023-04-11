import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blogedit',
  templateUrl: './blogedit.component.html',
  styleUrls: ['./blogedit.component.css']
})

export class BlogeditComponent implements OnInit {
  form!: FormGroup;
  users: any[] | undefined;
  categories!: any[];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      content: '',
      links: '',
      status: true,
      user: '',
      category: '',
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
  // onSubmit() {
  //   let postData = this.form.value;
  //   //obtiene el usuario seleccionado en el formulario con el valor de user y lo manda al backend como un objeto con el id del usuario pero convierte a number
  //   postData.user = { id: Number(postData.user) };
  //   postData.category = { id: Number(postData.category) };

  //   console.log(postData);

  //   this.http
  //     .post('http://localhost:8080/api/post/create', postData)
  //     .subscribe((response) => {
  //       console.log(response);
  //       this.router.navigate(['/']);
  //     });
  // }

  editPost() {
    let postData = this.form.value;
    //obtiene el usuario seleccionado en el formulario con el valor de user y lo manda al backend como un objeto con el id del usuario pero convierte a number
    postData.user = { id: Number(postData.user) };
    postData.category = { id: Number(postData.category) };

    console.log(postData);

    this.http
      .put('http://localhost:8080/api/post/edit', postData)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['/']);
      });
  }

}
