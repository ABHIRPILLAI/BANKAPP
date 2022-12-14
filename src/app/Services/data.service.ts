import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



const options={
  headers:new HttpHeaders()
}


@Injectable({
  providedIn: 'root'
})
//globally http header obj











export class DataService {

currentUser="";///for display current username name in dashboard

currentAcno="";






constructor(private http:HttpClient){
  // this.getDetails();
}


// saveDetails(){
//   if(this.userDetail){
//     localStorage.setItem('database',JSON.stringify(this.userDetail))
//   }
//   if(this.currentAcno){
//     localStorage.setItem('CurrentAcno',JSON.stringify(this.currentAcno))
//   }
//   if(this.currentUser){
//     localStorage.setItem('CurrentUser',JSON.stringify(this.currentUser))
//   }
// }

// getDetails(){
//   if(this.userDetail){
//     this.userDetail=JSON.parse(localStorage.getItem('database')||'')
//   }
//   if(this.currentAcno){
//     this.currentAcno=JSON.parse(localStorage.getItem('CurrentAcno')||'')
//   }
//   if(this.currentUser){
//     this.currentUser=JSON.parse(localStorage.getItem('CurrentUser')||'')
//   }
// }



  userDetail:any=
  {
    1000:{acno:1000,username:'Abhi',password:1000,balance:1000,transaction:[]},
    1001:{acno:1001,username:'Abhilash',password:1001,balance:1000001,transaction:[]},
    1002:{acno:1002,username:'Abhilash Radhakarishna Pillai',password:1002,balance:100002,transaction:[]}//add transaction 
  }

   register(acno:any,username:any,password:any){

    const data={
      acno,
      username,
      password,
    }

    return this.http.post('http://localhost:3000/register',data)//asynchronous call to conncet btw fe and be in be we use cors 

      

    // let userDetails=this.userDetail

    // if(acno in userDetails){
    //   return false;
    // }
    // else{
    //   userDetails[acno]={
    //     acno:acno,
    //     username:username,
    //     password:password,
    //     balance:0,
    //     transaction:[]//also here
    //   }
    //   console.log(userDetails);
    //   this.saveDetails();
      
    //   return true;
    // }

   }


   login(acno:any,password:any){
    
    const data={
      acno,
      password    
    }

    return this.http.post('http://localhost:3000/login',data)//asynchronous call to conncet btw fe and be in be we use cors 

  //   let userDetails=this.userDetail

  //   if (acnoo in userDetails) {

  //     if(pswdd==userDetails[acnoo]['password']){
  //       this.currentUser=userDetails[acnoo]['username']//assign username to the variable
  //       this.currentAcno=acnoo
  //       this.saveDetails();
  //       return true;

  //     }
      
  //    else {
  //     return false;
      
  //   }
  // }
  //   else{
  //     return false;
  //   }

   }

   getToken()
   {
    //fetch token
    const token = JSON.parse(localStorage.getItem('token')||'')
    //assign to headers
    let headers=new HttpHeaders()
    if(token)
    {
      options.headers=headers.append('x-access-token',token)
    }
    return options//to get token

   }



   deposit(acno:any,password:any,amt:any)
   {
    const data={
      acno,
      password,
      amount:amt
    }

    return this.http.post('http://localhost:3000/deposit',data, this.getToken())



    // let userDetails=this.userDetail
    // var amount=parseInt(amt)
    // if (acno in userDetails) {
    //   if (password==userDetails[acno]['password']) {
    //     userDetails[acno]['balance']+=amount;
    //     userDetails[acno]['transaction'].push({//push values to transaction array
    //       Type:'Credit',
    //       amount:amount//the Type name and amount name is refered in *ngFor
    //     })
       
    //     console.log(userDetails);//to check whether the data is disolaying
        
    //     // this.saveDetails();
    //     return userDetails[acno]['balance']

    //   }
    //   else{
    //     alert('password incorrect')
    //     return false;
    //   }
    // }
    // else{
    //   alert('invalid userdetails')
    //   return false
    // }
  }

  withdraw(acno:any,password:any,amt:any)
   {
    const data={
      acno,
      password,
      amount:amt
    }

    return this.http.post('http://localhost:3000/withdraw',data, this.getToken())
  }


  
  // withdraw(acno:any,pswd:any,amt:any)
  // {
  //   let userDetails=this.userDetail
  //   var amount=parseInt(amt)
  //   if (acno in userDetails) {
  //      if(amount>userDetails[acno]['balance']){
  //       alert("transaction error")

  //       return false;
  //     }
  //     else if (pswd==userDetails[acno]['password']) {
  //       userDetails[acno]['balance']-=amount;
  //       userDetails[acno]['transaction'].push({//push values to transaction array
  //         Type:'Debit',
  //         amount:amount
  //       })
  //       console.log(userDetails);
  //       // this.saveDetails();
  //       return userDetails[acno]['balance']
        
  //     }

  //     else{
  //       alert('password incorrect')
  //       return false;
  //     }
  //   }
  //   else{
  //     alert('invalid userdetails')
  //     return false;
  //   }
  
  // }
  // getTransaction(acno:any){//acno arde ano ayalde acnt details kitnm

  // return  this.userDetail[acno]['transaction']

  // }
  getTransaction(acno:any)
  {
   const data={
     acno
   }

   return this.http.post('http://localhost:3000/transaction',data, this.getToken())
 }

 deleteAcc(acno:any)
{
  return this.http.delete('http://localhost:3000/deleteAcc/'+acno)

}


}

  
