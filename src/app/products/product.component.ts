import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent { 
    title: String = 'A List of Products';
    showImage: boolean = false;
    imageWidth: Number = 180;
    products: IProduct[];

    constructor(private _products: ProductService) {}

    ngOnInit(): void{
      this._products.getProducts()
        .subscribe((data) => this.products = data);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onDataReceive(message: string): void {
      this.title = 'A List of Products ========>'+message;
    }
}