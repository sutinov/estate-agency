import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  PropertyFilter,
  Properties,
  singleProperty,
  propertyDetails,
} from './estate.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstateService {
  constructor(private httpClient: HttpClient) {}

  showSidebar: Subject<propertyDetails> = new Subject<propertyDetails>();

  public getProperties(filter: PropertyFilter) {
    return this.httpClient.post(
      'http://api.property.techup.me/property/market/residential/sale/list/filter',
      filter
    );
  }

  public getRentProperties(filter: PropertyFilter) {
    return this.httpClient.post(
      'http://api.property.techup.me/property/market/residential/rent/list/filter',
      filter
    );
  }

  public singleProperty(filter: singleProperty) {
    return this.httpClient.post(
      'http://api.property.techup.me/property/details/single',
      filter
    );
  }
}
