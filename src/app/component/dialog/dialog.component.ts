import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
productForm !: FormGroup;
constructor(private formBuilder: FormBuilder) {}

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
    // productName : ['', Validators.required,Validators.minLength(3), Validators.maxLength(50)],
    // productShortCode : ['', Validators.required,Validators.minLength(3), Validators.maxLength(50)],
    // category : ['', Validators.required],
    // price : ['', Validators.required],
    // description : ['', Validators.required,Validators.minLength(3), Validators.maxLength(250)],
    // imageUrl : [''],
    // isBestArchieved : ['', Validators.required],
    // createdDate : ['', Validators.required],
    // origin : ['', Validators.required]
  })
}
addProduct(){
  console.log(this.productForm.value);
}

}