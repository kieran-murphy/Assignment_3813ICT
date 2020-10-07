import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class ProductService {
  url = "http://localhost:3000";
  product = {};
  constructor(private http: HttpClient) {}

//shows all entries
  getList() {
    return this.http.get<any>(this.url + "/list");
  }
//allows new entries to be made
  addProduct(product) {
    console.log("SERVICE SERVICE");
    return this.http.post<any>(this.url + "/add", product);
  }
//removes a product
  deleteProduct(id) {
    return this.http.post<any>(this.url + "/deleteitem", {
      id: id
    });
  }
//retrieves a specific entry
  getItem(id) {
    return this.http.post<any>(this.url + "/getItem", { passingid: id });
  }
//makes changes to the details of an entry
  updateItem(product) {
    return this.http.post<any>(this.url + "/update", product);
  }
}
