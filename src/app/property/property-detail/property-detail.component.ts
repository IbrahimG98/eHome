import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IHouseBase } from 'src/app/model/iHouseBase';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { HousingService } from 'src/app/services/housing.service';
import {IHouse} from '../../model/iHouse';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private houseService:HousingService,private router:Router) { }
  public propertyId:number;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  propertyDetail:IHouse={
    Id:null,
    Name:'',
    SellRent:null,
    Image:"",
    Price:null,
    PType:null,
    FType:null,
    Address:'',
    City:'',
    State:'',
    Country:'',
    HouseSize:'',
    LotSize:'',
    Description:''
};
public selectedTab:number;
  ngOnInit(): void {
    this.propertyId=Number(this.route.snapshot.params["id"]);
     this.selectedTab=1;
    this.route.params.subscribe(data=>
      {
        this.propertyId=+data["id"];
        this.houseService.getProperty(this.propertyId).subscribe(data=>
          {
            this.propertyDetail=data;
            console.log(this.propertyDetail);
          })
      });

      this.galleryOptions = [
        {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
        },
        // max-width 400
        {
          breakpoint: 400,
          preview: false
        }
      ];

      this.galleryImages = [
        {
          small: 'assets/images/house-inside-1.jpg',
          medium: 'assets/images/house-inside-1.jpg',
          big: 'assets/images/house-inside-1.jpg'
        },
        {
          small: 'assets/images/house-inside-2.jpg',
          medium: 'assets/images/house-inside-2.jpg',
          big: 'assets/images/house-inside-2.jpg'
        },
        {
          small: 'assets/images/house-inside-3.jpg',
          medium: 'assets/images/house-inside-3.jpg',
          big: 'assets/images/house-inside-3.jpg'
        },{
          small: 'assets/images/house-inside-4.jpg',
          medium: 'assets/images/house-inside-4.jpg',
          big: 'assets/images/house-inside-4.jpg'
        },
        {
          small: 'assets/images/house-inside-5.jpg',
          medium: 'assets/images/house-inside-5.jpg',
          big: 'assets/images/house-inside-5.jpg'
        }
      ];
  }


setSelectedTab(value:number)
{
  this.selectedTab=value;
}




}
