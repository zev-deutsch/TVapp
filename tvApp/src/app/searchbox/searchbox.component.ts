import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  search = '';

  constructor() { }

  ngOnInit() {
  }

  searchShow($event) {
    console.log($event);
  }
}