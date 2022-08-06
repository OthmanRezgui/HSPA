import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IPropertyBase } from '../ipropertybase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  PropertyArray: Array<IPropertyBase> =[];
  SellRent = 1;

  constructor(private housingService: HousingService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    if(this.route.snapshot.url.toString())
    {
      this.SellRent = 2 ;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe((data) => {
      console.log(data);
      this.PropertyArray = data;
      const newProperty = JSON.parse(localStorage.getItem('newProp'));
      if(newProperty.SellRent === this.SellRent)
      {
        this.PropertyArray = [newProperty, ...this.PropertyArray];
      }
      console.log(this.route.snapshot.url.toString())
    },
    error=> console.log(error));
  }
}
