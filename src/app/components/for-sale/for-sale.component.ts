import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  Properties,
  PropertyFilter,
  singleProperty,
} from 'src/app/estate.model';
import { EstateService } from 'src/app/estate.service';

@Component({
  selector: 'for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css'],
})
export class ForSaleComponent implements OnInit {
  filter: PropertyFilter = new PropertyFilter();
  single: singleProperty = new singleProperty();
  media_list: MediaList[];
  showSidebar: any;

  constructor(private service: EstateService) {}
  Properties: Properties[];
  properties: PropertyFilter[];
  propertySubsctiprion: Subscription;
  showDetailsSubscription: Subscription;

  ngOnInit(): void {
    this.filter.page_index = 1;
    this.filter.page_size = 10;
    this.filter.bedroom_type = 'atleast';
    this.filter.bathroom_type = 'atleast';

    this.propertySubsctiprion = this.service
      .getProperties(this.filter)
      .subscribe((result: any) => {
        // console.log('Estates: ', result.response.propertylist);
        this.Properties = result.response.propertylist;
        console.log(this.Properties);
      });
  }

  showDetails(id: string) {
    this.single.property_id = id;
    this.showDetailsSubscription = this.service
      .singleProperty(this.single)
      .subscribe((result: any) => {
        console.log(result.response);

        this.service.showSidebar.next(result.response);
      });
  }

  onDestroy() {
    this.propertySubsctiprion.unsubscribe();
    this.showDetailsSubscription.unsubscribe();
  }
}
