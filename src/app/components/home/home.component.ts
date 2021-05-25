import { Component, OnInit } from '@angular/core';
import { propertyDetails } from 'src/app/estate.model';
import { EstateService } from 'src/app/estate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showSidebar: boolean = false;
  propertyDetails: propertyDetails;

  constructor(private estateService: EstateService) {}

  ngOnInit(): void {
    this.estateService.showSidebar.subscribe((details: propertyDetails) => {
      this.propertyDetails = details;
      console.log('Property details in home: ', this.propertyDetails);
      this.showSidebar = true;
    });
  }

  onXClick() {
    this.showSidebar = false;
  }
}
