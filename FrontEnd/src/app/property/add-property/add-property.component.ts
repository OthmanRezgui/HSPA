import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  propertyTypes: string[] = ['House','Appartement', 'Duplex'];
  furnishTypes: string[] = ['Fully','Semi', 'Unfurnished'];
  propertyView : IProperty =
  {
  Id: null,
  Name:'',
  Price: null,
  SellRent:null,
  Type: null

  };
  @ViewChild('Form') addPropertyForm : NgForm;
  constructor(private router: Router) { }
  @ViewChild('formTabs') formTabs : TabsetComponent;
  ngOnInit() {
  }

  onBack()
  {
    this.router.navigate(['/'])
  }

  onSubmit()
  {
    console.log("Form is sending event");
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number)
  {
   this.formTabs.tabs[tabId].active = true;
  }

}
