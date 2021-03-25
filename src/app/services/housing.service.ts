import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";
//import { IHouse } from '../property/IHouse.interface';
import {IHouse} from '../model/iHouse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getProperty(id:number)
  {
    return this.getAllProperties().pipe(
      map(properties=>
        {
          return properties.find(p=>p.Id===id);
        })
    );
  }

  getAllProperties(SellRent?:number):Observable<IHouse[]>
  {

     return this.http.get('data/houses.json').pipe(
      map(data=>
        {
          const housesArray:Array<IHouse>=[];
          const localProperties=JSON.parse(localStorage.getItem('house'));
          if(localProperties)
          {

              if(SellRent)
              {
              if(localProperties["SellRent"]===SellRent)
              {
                housesArray.push(localProperties);
              }
              }
              else
              {
                housesArray.push(localProperties);
              }
          }

          for(const id in data)
          {

            if(SellRent)
            {
            if(data.hasOwnProperty(id) && data[id].SellRent===SellRent)
            {
              housesArray.push(data[id]);
            }
            }
            else
            {
              housesArray.push(data[id]);
            }

          }
          return housesArray;

        })
    );
  }

  addProperty(obj)
  {
    localStorage.setItem('house',JSON.stringify(obj));
  }
}
