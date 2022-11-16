import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //  uname="";
  //  acno="";
  //  pswd="";


  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { }
  //ds - register variable

  //register model 
  registerForm=this.fb.group({  //group    // * -regular expression
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],  //array
    acno:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
  })

  //control -> goes to register.component.html

  ngOnInit(): void {
  }

  register(){
    // alert("Register Clicked");
    console.log(this.registerForm);
    

    var uname=this.registerForm.value.uname;
    var acno=this.registerForm.value.acno;            //form group
    var pswd=this.registerForm.value.pswd;

    const result=this.ds.register(acno,uname,pswd);
    if(this.registerForm.valid){


    if(result){
      alert("Register Successfully");
      this.router.navigateByUrl('');
    }
    else{
      alert("Register Failed");
    }
  }
  else{
    alert('Register Failed');
    console.log(this.registerForm.get('uname')?.errors);
    
  }
}

}
