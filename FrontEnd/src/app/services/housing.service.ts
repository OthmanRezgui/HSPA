import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Observable } from 'rxjs';
import { IProperty } from '../property/iproperty';
import { IPropertyBase } from '../property/ipropertybase';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(SellRent: number): Observable<IPropertyBase[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
      const propertiesArray: Array<IPropertyBase> = [];
      const localProperties = JSON.parse(localStorage.getItem('newProp'));
      if(localProperties)
      {
        for (const id in localProperties) {
          if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent) {
            propertiesArray.push(localProperties[id]);
          }
        }
      }
      for (const id in data) {
        if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
          propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
      })
    );

    return this.http.get<IProperty[]>('data/properties.json');
  }
  addProperty(property: Property) {
    let newProp = [property];
    if(localStorage.getItem('newProp'))
    {
       newProp = [property, ... JSON.parse(localStorage.getItem('newProp'))]
    }

    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropId()
  {
   if(localStorage.getItem('PID'))
   {
    localStorage.setItem('PID',String(+localStorage.getItem('PID') +1) );
    return +localStorage.getItem('PID');
   }
   else
   {
    localStorage.setItem('PID','101' );
    return 101;
   }
  }
}
