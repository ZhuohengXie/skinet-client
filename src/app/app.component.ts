import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Skinet'; // used as {{title}} in app.component.html
  products: any[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products?pageSize=50').subscribe((response: any) => {
      // console.log(response);
      this.products = response; // reponse.data?
      // console.log(this.products);
    }, error => {
      console.log(error);
    });
  }
}
