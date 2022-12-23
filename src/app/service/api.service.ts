import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("http://localhost:3000/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  postProduct(data: any){
    return this.http.post<any>("http://localhost:3000/products", data);
  }


  // getAllProduct(){
  //   return this.http.get<any>("http://localhost:3000/products")
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
}