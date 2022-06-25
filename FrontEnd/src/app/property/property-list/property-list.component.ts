import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  PropertyArray: Array<any> = [{
    "Id":1,
    "Type":"House",
    "Price": 300,
    "Name" :"House Antony"
  },
  {
    "Id":2,
    "Type":"House",
    "Price": 500,
    "Name" :"Clamart"
  },
  {
    "Id":3,
    "Type":"Appartement",
    "Price": 783,
    "Name" :"Saint germain en laye"
  },
  {
    "Id":4,
    "Type":"Appartement",
    "Price": 1000,
    "Name" :"Rueil Malmaison"
  },
  {
    "Id":5,
    "Type":"Appartement",
    "Price": 1000,
    "Name" :"Houilles"
  },
  {
    "Id":6,
    "Type":"Appartement",
    "Price": 1000,
    "Name" :"Paris"
  }



]

  constructor() { }

  ngOnInit(): void {
  }

}
