import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

currentUser="";///for display current username name in dashboard

currentAcno="";






constructor(){
  this.getDetails();
}


saveDetails(){
  if(this.userDetail){
    localStorage.setItem('database',JSON.stringify(this.userDetail))
  }
  if(this.currentAcno){
    localStorage.setItem('CurrentAcno',JSON.stringify(this.currentAcno))
  }
  if(this.currentUser){
    localStorage.setItem('CurrentUser',JSON.stringify(this.currentUser))
  }
}

getDetails(){
  if(this.userDetail){
    this.userDetail=JSON.parse(localStorage.getItem('database')||'')
  }
  if(this.currentAcno){
    this.currentAcno=JSON.parse(localStorage.getItem('CurrentAcno')||'')
  }
  if(this.currentUser){
    this.currentUser=JSON.parse(localStorage.getItem('CurrentUser')||'')
  }
}



  userDetail:any=
  {
    1000:{acno:1000,username:'Abhi',password:1000,balance:1000,transaction:[]},
    1001:{acno:1001,username:'Abhilash',password:1001,balance:1000001,transaction:[]},
    1002:{acno:1002,username:'Abhilash Radhakarishna Pillai',password:1002,balance:100002,transaction:[]}//add transaction 
  }

   register(acno:any,username:any,password:any){

    let userDetails=this.userDetail

    if(acno in userDetails){
      return false;
    }
    else{
      userDetails[acno]={
        acno:acno,
        username:username,
        password:password,
        balance:0,
        transaction:[]//also here
      }
      console.log(userDetails);
      this.saveDetails();
      
      return true;
    }

   }


   login(acnoo:any,pswdd:any){

    let userDetails=this.userDetail

    if (acnoo in userDetails) {

      if(pswdd==userDetails[acnoo]['password']){
        this.currentUser=userDetails[acnoo]['username']//assign username to the variable
        this.currentAcno=acnoo
        this.saveDetails();
        return true;

      }
      
     else {
      return false;
      
    }
  }
    else{
      return false;
    }

   }
   deposit(acno:any,pswd:any,amt:any)
  
  {
    let userDetails=this.userDetail
    var amount=parseInt(amt)
    if (acno in userDetails) {
      if (pswd==userDetails[acno]['password']) {
        userDetails[acno]['balance']+=amount;
        userDetails[acno]['transaction'].push({//push values to transaction array
          Type:'Credit',
          amount:amount//the Type name and amount name is refered in *ngFor
        })
       
        console.log(userDetails);//to check whether the data is disolaying
        
        this.saveDetails();
        return userDetails[acno]['balance']

      }
      else{
        alert('password incorrect')
        return false;
      }
    }
    else{
      alert('invalid userdetails')
      return false
    }
  }
  withdraw(acno:any,pswd:any,amt:any)
  {
    let userDetails=this.userDetail
    var amount=parseInt(amt)
    if (acno in userDetails) {
       if(amount>userDetails[acno]['balance']){
        alert("transaction error")

        return false;
      }
      else if (pswd==userDetails[acno]['password']) {
        userDetails[acno]['balance']-=amount;
        userDetails[acno]['transaction'].push({//push values to transaction array
          Type:'Debit',
          amount:amount
        })
        console.log(userDetails);
        this.saveDetails();
        return userDetails[acno]['balance']
        
      }

      else{
        alert('password incorrect')
        return false;
      }
    }
    else{
      alert('invalid userdetails')
      return false;
    }
  
  }
  getTransaction(acno:any){//acno arde ano ayalde acnt details kitnm

  return  this.userDetail[acno]['transaction']

  }

}

  
