import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listType=1
  constructor() { }

  ngOnInit(): void {
  }

  searchChange(event){

  }

}
