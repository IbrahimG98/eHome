import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";
import { IHouse } from '../property/IHouse.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent:number):Observable<IHouse[]>
  {

     return this.http.get('data/houses.json').pipe(
      map(data=>
        {
          const housesArray:Array<IHouse>=[];
          for(const id in data)
          {
            if(data.hasOwnProperty(id) && data[id].SellRent===SellRent)
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
