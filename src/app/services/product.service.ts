import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(`http://localhost:3000/products`)
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  addProduct(product:IProduct): Observable<any> {
    return this.http.post(`http://localhost:3000/products`, product)
  }
  updateProduct(product:IProduct): Observable<any> {
    return this.http.patch(`http://localhost:3000/products/${product.id}`, product)
  }
}
