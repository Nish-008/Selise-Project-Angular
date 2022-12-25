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
    return this.http.post("http://localhost:3000/products", data);
  }

  patchProduct(data: any,id: string) {
    return this.http.patch<any>("http://localhost:3000/products/"+id, data);
  }

  deleteProduct(id: string){
    return this.http.delete("http://localhost:3000/products/"+id);
  }

  getProductById(id: string){
    return this.http.get("http://localhost:3000/products/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}