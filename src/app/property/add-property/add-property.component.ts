import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IHouseBase } from 'src/app/model/iHouseBase';
import { HousingService } from 'src/app/services/housing.service';
import * as alertify from "alertifyjs";

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor(private houseService:HousingService,
    private router:Router) { }
  selectedTab:number;
  ngOnInit(): void {
    this.selectedTab=1;
  }
  propertyTypes:Array<string>=['House','Flat','Duplex'];
  furnishTypes:Array<string>=['Fully furnished','Semi furnished','Unfurnished'];

  homeView:IHouseBase={
          Id:null,
          Name:'',
          SellRent:null,
          Image:"../assets/images/prop-1.jpg",
          Price:null,
          PType:null,
          FType:null,
          Address:'',
          City:'',
          State:'',
          Country:'',
          HouseSize:'',
          LotSize:''
  };
  homeMap:IHouseBase={
    Id:null,
    Name:'',
    SellRent:null,
    Image:"../assets/images/prop-1.jpg",
    Price:null,
    PType:null,
    FType:null,
    Address:'',
    City:'',
    State:'',
    Country:'',
    HouseSize:'',
    LotSize:''
};
  insertObject={};
  onNext(form:NgForm)
  {
    this.insertObject={...this.insertObject,...form.value};
    this.selectedTab+=1;
  }
  onPageDown()
  {
    this.selectedTab-=1;
  }
  onBack()
  {
    this.router.navigate(['/']);
  }
  setSelectedTab(value:number)
  {
    this.selectedTab=value;
  }

  mapHouse(object)
  {
    this.homeMap.PType=object["PType"];
    this.homeMap.FType=object["FType"];
    this.homeMap.Name=object["Name"];
    this.homeMap.SellRent=+object["SellRent"];
    this.homeMap.Address=object["address"];
    this.homeMap.City=object["city"];
    this.homeMap.Country=object["country"];
    this.homeMap.State=object["state"];
    this.homeMap.LotSize=object["lot"];
    this.homeMap.HouseSize=object["houseSize"];
    this.homeMap.Price=object["price"];
  }
  onSubmit(form:NgForm)
  {
    this.insertObject={...this.insertObject,...form.value};
    this.mapHouse(this.insertObject);
    this.houseService.addProperty(this.homeMap);
    alertify.success("You have successfully added your property!");
    if(this.homeMap.SellRent===1)
    {
      this.router.navigate(['']);
    }
    else
    {
      this.router.navigate(['rent']);
    }
    //console.log("Object that will be sent to API:",this.insertObject);
  }

}
