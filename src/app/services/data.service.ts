import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //login name display
  currentUser:any;         //welcome user

  //login acno
  currentAcno:any;        //print transaction history

userDetails :any={       //object of objects
  1000:{acno:1000,username:'ajas',password:1000,balance:1000,transaction:[]},
  1001:{acno:1001,username:'ajmal',password:1111,balance:100,transaction:[]},
  1002:{acno:1002,username:'salma',password:1222,balance:10,transaction:[]},
}

  constructor() { }
  register(acno:any,username:any,password:any){
    var userDetails=this.userDetails;
    if(acno in localStorage){
      return false;
    }
    else{
      userDetails[acno]={
        acno,
        username,
        password,
        balance:0,
        transaction:[]
      }
    console.log(userDetails);
    return true;
      
    }
  }

  login(acno:any,pswd:any){
    var userDetails=this.userDetails;
    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        this.currentUser=userDetails[acno]['username']      // welcome user
        this.currentAcno=acno;                             //print transaction history
        return true;
      }
      else{
        alert('Invalid Password')
        return false;
      
      }
    }
    else{
      alert('UserName Does Not Exist')
      return false;
    }
  }

  deposit(acno:any,pswd:any,amt:any)
  {
     let userDetails=this.userDetails
     var amount=parseInt(amt);             //string ne integer lekk convert cheyyan

     if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        userDetails[acno]['balance']+=amount;
        userDetails[acno]['transaction'].push({
          type:'Credit',
          amount
        })
        return userDetails[acno]['balance'];
      }
      else{
        alert('invalid password')
        return false;
      }
     }
     else{
      alert('invalid user details')
      return false;
     }
  }

  withdraw(acno:any,pswd:any,amt:any)
  {

    let userDetails=this.userDetails
     var amount=parseInt(amt);             //string ne integer lekk convert cheyyan

     if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        if(userDetails[acno]['balance']>amount){
        userDetails[acno]['balance']-=amount;
        userDetails[acno]['transaction'].push({
          type:'Debit',
          amount
        })
        return userDetails[acno]['balance'];
      }
    }
      else{
        alert('invalid password')
        return false;
      }
     }
     else{
      alert('invalid user details')
      return false;
     }
  }
  getTransaction(acno:any){
    return this.userDetails[acno]['transaction'];      //print transaction history

  }
}
