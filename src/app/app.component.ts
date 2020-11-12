import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './shared/models/pagination';
import { IProduct } from './shared/models/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Skinet'; // used as {{title}} in app.component.html
  products: IProduct[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products?pageSize=50').subscribe(
      (response: IPagination) => {
      // console.log(response);
      this.products = response.data; // reponse.data?
      // console.log(this.products);
    }, error => {
      console.log(error);
    });
  }
}
