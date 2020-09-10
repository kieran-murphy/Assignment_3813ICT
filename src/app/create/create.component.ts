import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

//retrieves user information from session storage
export class CreateComponent implements OnInit {

  username = sessionStorage.getItem('username');
  age = sessionStorage.getItem('age');
  email = sessionStorage.getItem('email');
  role = sessionStorage.getItem('role');

  newusername = sessionStorage.getItem('newusername');
  newemail = sessionStorage.getItem('newemail');
  newrole = sessionStorage.getItem('newrole');
  newpassword = sessionStorage.getItem('newpassword');

  session = null;

  constructor(private router: Router) { }

  ngOnInit(){
    if (sessionStorage.length == 0){
      this.session = false;
      this.router.navigateByUrl('');
    } else {
      this.session = true;
    }
  }

  //checks that the user is the appropriate role to access this page, if not sends them to a page with access denied message
  valid() {
    if (sessionStorage.getItem('role') == 'User') {
      
      this.router.navigateByUrl('/block');
    } else {
      this.router.navigateByUrl('/create');
    }
    
  }

//makes the details stored in session strings that can be updated
  public updateDetails() {

    sessionStorage.setItem('username', this.username.toString());
    //sessionStorage.setItem('birthdate', this.birthdate.toString());
    //sessionStorage.setItem('age', this.age.toString());
    sessionStorage.setItem('email', this.email.toString());
    sessionStorage.setItem('role', this.role.toString());
    
    this.router.navigateByUrl('profile');
  }
//clears the sessions details and logs out the user returning them to the login page
  logout() {
    console.log('logged out');
    this.session = false;
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigateByUrl('');
  }


  //alerts the user that the new user's details have been accepted and displays them
  createUser() {
    alert("Successfully created user: " + this.newusername 
    + "\n Password: " + this.newpassword
    + "\n Email: " + this.newemail
    + "\n Role: " + this.newrole);
  }
}