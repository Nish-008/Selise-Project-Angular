import { Component ,Inject,inject,OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
productForm !: FormGroup;
actionBtn : string = "Save"
constructor(private formBuilder : FormBuilder, 
  private api: ApiService,
  @Inject(MAT_DIALOG_DATA) public editData : any,
   private dialogRef: MatDialogRef<DialogComponent>
   ) {}

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
 if(this.editData){
  this.actionBtn = "Update";
  this.productForm.controls['productName'].setValue(this.editData.productName);
  this.productForm.controls['productShortCode'].setValue(this.editData.productShortCode);
  this.productForm.controls['category'].setValue(this.editData.category);
  this.productForm.controls['price'].setValue(this.editData.price);
  this.productForm.controls['description'].setValue(this.editData.description);
  this.productForm.controls['imageUrl'].setValue(this.editData.imageUrl);
  this.productForm.controls['quantity'].setValue(this.editData.quantity);
  this.productForm.controls['isBestArchieved'].setValue(this.editData.isBestArchieved);
  this.productForm.controls['createdDate'].setValue(this.editData.createdDate);
  this.productForm.controls['origin'].setValue(this.editData.origin);
 }
}

addProduct(){
  // console.log(this.productForm.value);
  if(!this.editData){
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
  } else {
    this.updateProduct()
  }
}

updateProduct(){
 this.api.patchProduct(this.productForm.value, this.editData._id)
 .subscribe({
  next:(res)=>{
    alert("Product updated successfuly");
    this.productForm.reset();
    this.dialogRef.close('update');
  }, 
  error:()=> {
    alert("Error while updating the record");
  },
 })
}

}