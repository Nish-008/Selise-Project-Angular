import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
public prodData : undefined | ApiService;
  constructor(private activeRoute : ActivatedRoute, private api: ApiService){}
  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('id');
    console.log(productId);
    productId && this.api.getProductById(productId).subscribe((result)=>{
      console.log(result);
      this.prodData = result;
    })
  }
}
