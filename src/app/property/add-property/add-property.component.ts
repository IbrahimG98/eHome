import { Component, ElementRef, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IHouseBase } from 'src/app/model/iHouseBase';
import { IHouse } from '../IHouse.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor(private router:Router) { }
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
  onNext()
  {
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
  onSubmit(form:NgForm)
  {
    console.log(form.value);
  }

}
