import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  constructor(private httpClient: HttpClient) {}

  private apiUrl:string = 'http://localhost:8080/api/post';

  getBlogs() {
    console.log(this.apiUrl);
    return this.httpClient.get(this.apiUrl);
  }

  getBlog(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get(url);
  }
}
