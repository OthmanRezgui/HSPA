import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../iproperty';
import { IPropertyBase } from '../ipropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  propertyTypes: string[] = ['House','Appartement', 'Duplex'];
  furnishTypes: string[] = ['Fully','Semi', 'Unfurnished'];
  propertyView : IPropertyBase =
  {
  Id: null,
  Name:'',
  Price: null,
  SellRent:null,
  PType: null,
  BHK: null,
  BuiltArea : null,
  City: null,
  FType: null,
  RTM:null

  };
  //@ViewChild('Form') addPropertyForm : NgForm;
  constructor(private router: Router, private fb:FormBuilder) { }
  @ViewChild('formTabs') formTabs : TabsetComponent;
  addPropertyForm: FormGroup;
  NextClicked : boolean;


  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm()
  {
    this.addPropertyForm = this.fb.group(
       {
        BasicInfo : this.fb.group({
          SellRent : [null, Validators.required],
          PType : [null, Validators.required],
          Name : [null, Validators.required],
        }),
        PriceInfo: this.fb.group({
          Price : [null, Validators.required],
          BuiltArea : [null, Validators.required]
        })
      }
    )
  }
  onBack()
  {
    this.router.navigate(['/'])
  }

  onSubmit()
  {
    this.NextClicked = true;
    console.log("Form is sending event");
    console.log(this.addPropertyForm.value.BasicInfo.SellRent);

    if (this.BasicInfo.invalid)
    {
      this.formTabs.tabs[0].active = true
      return;
    }

    if (this.PriceInfo.invalid)
    {
      this.formTabs.tabs[1].active = true
      return;
    }
  }

  selectTab(tabId: number , IsCurrentTabValid : boolean )
  {
    this.NextClicked = true ;
    if (IsCurrentTabValid)
    {
   this.formTabs.tabs[tabId].active = true;
    }
  }


  get BasicInfo()
  {
    return this.addPropertyForm.controls.BasicInfo as FormGroup;
  }

  get SellRent()
  {
    return this.BasicInfo.controls.SellRent as FormControl;
  }

  get PriceInfo()
  {
    return this.addPropertyForm.controls.PriceInfo as FormGroup;
  }


  get Price()
  {
    return this.PriceInfo.controls.Price as FormControl;
  }

}
