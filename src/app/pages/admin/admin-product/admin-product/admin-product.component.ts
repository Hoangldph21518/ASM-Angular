import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent {
  products!:IProduct[]
  constructor(private productService:ProductService){
    this.productService.getAll().subscribe(data => {
      this.products = data
      console.log(data);
      
    })
  }
  delete (id: any) {
    this.productService.delete(id).subscribe(() => {
      this.products = this.products.filter(item => item.id != id)
      console.log("xóa thành công")
    })
  }
}
