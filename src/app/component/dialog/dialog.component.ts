import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
productForm !: FormGroup;
constructor(private formBuilder : FormBuilder, private api: ApiService, private dialogRef: MatDialogRef<DialogComponent>) {}

ngOnInit(): void{
  this.productForm = this.formBuilder.group({

    productName : ['', Validators.required],
    productShortCode : ['', Validators.required],
    category : ['', Validators.required],
    price : ['', Validators.required],
    description : ['', Validators.required],
    imageUrl : [''],
    quantity :['',Validators.required],
    isBestArchieved : ['', Validators.required],
    createdDate : ['', Validators.required],
    origin : ['', Validators.required]
  })
}
// addProduct(productName:any, productShortCode:any, category:any, price:any, description:any, imageUrl:any, quantity:any, isBestArchieved:any, createdDate:any, origin:any)
// {
//   this.http.post('http://localhost:3000/products', {
//     "productName": productName.value,
//     "productShortCode":productShortCode.value,
//     "category": category.value,
//     "price": price.value,
//     "description": description.value,
//     "imageUrl": imageUrl.value,
//     "quantity": quantity.value,
//     "isBestArchieved": isBestArchieved.value,
//     "createdDate": createdDate.value,
//     "origin": origin.value
//   }).subscribe({
//     next:(res)=>{
//       alert('Product added successfully')
//     },
//     error:()=>{
//       alert('Error while adding the product')
//     }
//   });
// }

addProduct(){
  console.log(this.productForm.value);
  if(this.productForm.valid){
    this.api.postProduct(this.productForm.value)
    .subscribe({
      next:(res)=>{
        alert('Product added successfully');
        this.productForm.reset();
        this.dialogRef.close('save');
      },
      error:()=>{
        alert('Error while adding the product')
      }
    })
  }
}
// if(this.productForm.valid){
//   this.http.post("http://localhost:3000/products", this.productForm.value)
//   .subscribe(data => {
//     console.log(data);
//     console.log(this.productForm.value);
//   });
//   }
// }

// productName : ['', Validators.required,Validators.minLength(3), Validators.maxLength(50)],
    // productShortCode : ['', Validators.required,Validators.minLength(3), Validators.maxLength(50)],
    // category : ['', Validators.required],
    // price : ['', Validators.required],
    // description : ['', Validators.required,Validators.minLength(3), Validators.maxLength(250)],
    // imageUrl : [''],
    // isBestArchieved : ['', Validators.required],
    // createdDate : ['', Validators.required],
    // origin : ['', Validators.required]

}