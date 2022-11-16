import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
  
const result=this.ds.login(acno,pswd);
if(result){
  alert("Login successfully");
  this.router.navigateByUrl('dashboard');
}

}



//   if(acno in userDetails){
//     if(pswd==userDetails[acno]['password']){
//       alert("login successfully");                   
//       this.router.navigateByUrl('dashboard');           //router to dashboard
//     }
//     else{
//       alert("invalid password");
//     }
//   }
//   else{
//     alert("invalid user details");
//   }
// }


// login(a:any,p:any){
//   // alert('login clicked');
//   var acno=a.value;
//   var pswd=p.value;
//   var userDetails=this.userDetails;

//   if(acno in userDetails){
//     if(pswd==userDetails[acno]['password']){
//       alert("login successfully");
//     }
//     else{
//       alert("invalid password");
//     }
//   }
//   else{
//     alert("invalid user details");
//   }
// }


//router=variable of login
//Router=its a class of navigateByUrl
  constructor(private router:Router,private ds:DataService) { }    //1st execute
   //spl member function , automatically involks when an obj created

  ngOnInit(): void {   //2nd execute
      //life cycle hooks of angular - initaial process of component initialization
  }

}
