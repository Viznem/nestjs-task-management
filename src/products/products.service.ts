import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
    private products: Product[] = [ 
        {id: "12345",
        name: "SEAT 25 - 0,37KW - 1400 - 1Phase",
        caculationUnit: "bo",
        amount: "1",
        price: "7.000.000",
        TotalPrice: "7.000.000"},
        {id: "23456",
        name: "SEAT 25 - 1,5KW - 2800 - 3Phase",
        caculationUnit: "bo",
        amount: "10",
        price: "5.000.000",
        TotalPrice: "50.000.000"},
        {id: "98765",
        name: "SEAT 25 - D19",
        caculationUnit: "cai",
        amount: "50",
        price: "100.000",
        TotalPrice: "5.000.000"},
        {id: "65789",
        name: "SEAT 25 - 2800 - D24",
        caculationUnit: "cai",
        amount: "10",
        price: "1.000.000",
        TotalPrice: "10.000.000"}
     ];

    getAllProducts(): Product[] {
        return this.products;
    }
}
