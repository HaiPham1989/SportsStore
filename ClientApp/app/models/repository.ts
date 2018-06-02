import { Product } from "./product.model";
import { Http } from "@angular/http";

export class Repository {
    constructor(private http: Http) {
    }

    getProduct(id: number) {
        this.http.get("api/products" + id).subscribe(response => this.product = response.json());
    }

    product: Product;
}