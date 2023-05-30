import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.scss']
})
export class AdminAddComponent {
  productForm = this.formBuilder.group({
    name:['', [Validators.required, Validators.minLength(4)]],
    price:[0],
    img:[""]
  })|| FormGroup

  constructor(
    private formBuilder : FormBuilder,
    private navigate: Router,
    private productService: ProductService
  ){}

  onHandAdd(){
    if(this.productForm.valid){
      const newProduct: IProduct ={
        name:this.productForm.value.name || "",
        price:this.productForm.value.price || 0,
        img:this.productForm.value.img || "",
      }
      this.productService.addProduct(newProduct).subscribe(data => {
        console.log("Thêm thành công", data);
      })
    }
  }

}
