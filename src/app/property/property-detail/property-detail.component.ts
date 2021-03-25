import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IHouseBase } from 'src/app/model/iHouseBase';
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

  ngOnInit(): void {
    this.propertyId=Number(this.route.snapshot.params["id"]);

    this.route.params.subscribe(data=>
      {
        this.propertyId=+data["id"];
        this.houseService.getProperty(this.propertyId).subscribe(data=>
          {
            this.propertyDetail=data;
            console.log(this.propertyDetail);
          })
      });
  }


}
