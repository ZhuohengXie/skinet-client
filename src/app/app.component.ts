import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet'; // used as {{title}} in app.component.html

  constructor() {}

  ngOnInit(): void {
  }
}
