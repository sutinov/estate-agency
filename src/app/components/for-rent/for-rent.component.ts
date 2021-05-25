import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  Properties,
  PropertyFilter,
  singleProperty,
} from 'src/app/estate.model';
import { EstateService } from 'src/app/estate.service';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'for-rent',
  templateUrl: './for-rent.component.html',
  styleUrls: ['./for-rent.component.css'],
})
export class ForRentComponent implements OnInit {
  filter: PropertyFilter = new PropertyFilter();
  single: singleProperty = new singleProperty();
  media_list: MediaList[];
  showDetailsSubscription: Subscription;
  constructor(private service: EstateService) {}
  Properties: Properties[];
  properties: PropertyFilter[];
  propertySubsctiprion: Subscription;
  rentProperty: PropertyFilter[];
  rentPropertySubscription: Subscription;

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

    this.rentPropertySubscription = this.service
      .getRentProperties(this.filter)
      .subscribe((result: any) => {
        console.log('Estates: ', result.response.propertylist);
        this.Properties = result.response.propertylist;
        console.log(this.rentProperty);
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
    this.rentPropertySubscription.unsubscribe();
    this.showDetailsSubscription.unsubscribe();
  }
}
