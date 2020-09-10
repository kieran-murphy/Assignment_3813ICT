import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

//makes the details stored in session strings that can be updated
export class ProfileComponent implements OnInit {

  userid = sessionStorage.getItem('userid');
  username = sessionStorage.getItem('username');
  //birthdate = sessionStorage.getItem('birthdate');
  role = sessionStorage.getItem('role');
  email = sessionStorage.getItem('email');
  session = null;

  constructor(private router: Router) {}

  ngOnInit() {
    if (sessionStorage.length == 0){
      this.session = false;
      this.router.navigateByUrl('');
    } else {
      this.session = true;
    }
  }
//clears the sessions details and logs out the user returning them to the login page
  logout() {
    console.log('clicked btn');
    this.session = false;
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  //checks that the user is the appropriate role to access this page, if not sends them to a page with access denied message
  valid() {
    if (sessionStorage.getItem('role') == 'User') {
      
      this.router.navigateByUrl('/block');
    } else {
      this.router.navigateByUrl('/create');
    }
    
  }

  //checks that the user is the appropriate role to access this page, if not sends them to a page with access denied message
  valid2() {
    if (sessionStorage.getItem('role') == 'User') {
      
      this.router.navigateByUrl('/block');
    } else {
      this.router.navigateByUrl('/account');
    }
    
  }

}
