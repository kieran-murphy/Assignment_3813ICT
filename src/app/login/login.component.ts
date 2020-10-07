import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from "../services/product.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  products: any;

  constructor(private router: Router, private httpClient: HttpClient, private productService: ProductService) {}

  email = '';
  password = '';
  session = null;

  userDetails = {username: this.email, password: this.password};

  ngOnInit() {
    if (sessionStorage.length > 0){
      this.session = true;
      this.router.navigateByUrl('profile');
    } else {
      this.session = false;
    }
    
    this.productService.getList().subscribe(data => {
      this.products = data;
    });
    

  }

  
//checks the the route /api/auth that the user has been authenticated and sets the values for the user or sends a message that login details are incorrect
  public loginfunc() {

    this.httpClient.post(BACKEND_URL + '/api/auth', this.userDetails, httpOptions)
    .subscribe((data: any) => {
      if (data.valid) {
        sessionStorage.setItem('userid', data.userid.toString());
        sessionStorage.setItem('username', data.username.toString());
        sessionStorage.setItem('role', data.role.toString());
        sessionStorage.setItem('email', data.email.toString());
        this.httpClient.post(BACKEND_URL + '/api/login-success', data, httpOptions)
        .subscribe((m: any) => {});
        this.router.navigateByUrl('profile');
      } else {
        alert('Incorrect username or password \nPlease try again!');
      }

    });
  }
}

