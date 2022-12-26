import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://selise-project-node.vercel.app/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  postProduct(data: any){
    return this.http.post("https://selise-project-node.vercel.app/products", data);
  }

  patchProduct(data: any,id: string) {
    return this.http.patch<any>("https://selise-project-node.vercel.app/products/"+id, data);
  }

  deleteProduct(id: string){
    return this.http.delete("https://selise-project-node.vercel.app/products/"+id);
  }

  getProductById(id: string){
    return this.http.get<any>("https://selise-project-node.vercel.app/products/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}