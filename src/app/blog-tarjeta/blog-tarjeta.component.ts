import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-tarjeta',
  templateUrl: './blog-tarjeta.component.html',
  styleUrls: ['./blog-tarjeta.component.css']
})
export class BlogTarjetaComponent implements OnInit {
  ngOnInit(): void {
  }

  @Input() blog: any;
}
