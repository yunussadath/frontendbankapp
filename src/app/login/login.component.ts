import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {   //3rd execute


//properties
aim="your perfect banking partner";

accounts="Enter Your Accno Here";

acno="";  //print 1000
pswd="";  //print 1000
//user defined functions   //4th execute

acnoChange(event:any){
  this.acno=event.target.value;  //1000
  
}
pswdChange(event:any){
 this.pswd=event.target.value;
 
}

login(){
  // alert('login clicked');
  var acno=this.acno;
  var pswd=this.pswd;
  var userDetails=this.userDetails;

  if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
      alert("login successfully");
    }
    else{
      alert("invalid password");
    }
  }
  else{
    alert("invalid user details");
  }
}

userDetails :any={       //object of objects
  1000:{acno:1000,username:'ajas',password:1000,balance:10000},
  1001:{acno:1001,username:'ajmal',password:1111,balance:100000},
  1002:{acno:1002,username:'salma',password:1222,balance:1000},
}

  constructor() { }    //1st execute
   //spl member function , automatically involks when an obj created

  ngOnInit(): void {   //2nd execute
      //life cycle hooks of angular - initaial process of component initialization
  }

}
