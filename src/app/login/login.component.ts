import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="The perfect Banking Partner"//string interpo;ation

  acc="Enter acc no here"//property binding



  acno="";
  pswd="";

 
  //(3rd execution)
//class-collection fo properties/methods
//userdefined methods  ---//(4rth execution)
  constructor(private router:Router , private ds:DataService) { }//(1st execution) //here dependancy injection so inside contructor bcoz it execute first
//contructor---automatically incokes when object is initialized
  ngOnInit(): void {
    //(2st execution)
    //initial process
    //ng oninit()---angular life cycle hook
  }

  acnoChange(event:any)
  {
     this.acno=event.target.value;
     console.log(this.acno);
     
  }

  pswdChange(event:any){

  this.pswd=event.target.value;
     console.log(this.pswd);
  }

  // login(a:any,p:any)
  // {
  //   // alert('Login Clicked');//event binding
  //   var acnoo=a.value;//1000
  //   var pswdd=p.value;
  //   var userDetails=this.userDetail
  //   if(acnoo in userDetails)//variables
  //   {
  //     if(pswdd==userDetails[acnoo]['password'])///pswd varible kitia value userdetailsile acno and athinte corresponding passwrd ayit match ondo noknm
  //     {
  //       alert('Login Successful');
  //     }
  //     else{
  //       alert('invalid password');
  //     }
  //   }
  //   else
  //   {
  //     alert("Invalid Userdetails");
  //   }
    
  // }
  login()
  {
    // alert('Login Clicked');//event binding
    var acnoo=this.acno;//1000
    var pswdd=this.pswd;
    var userDetails=this.ds.userDetail//also a depedency injection coz this file is in servies and dataservice class under it comes


    const result=this.ds.login(acnoo,pswdd)
    if(result){
      alert('Login Successful');
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert("login failed");
    }
  }
}





//     if(acnoo in userDetails)//variables
//     {
//       if(pswdd==userDetails[acnoo]['password'])///pswd varible kitia value userdetailsile acno and athinte corresponding passwrd ayit match ondo noknm
//       {
//         alert('Login Successful');
//         this.router.navigateByUrl('dashboard')//dependacy injection ie router classs needed for navigateby url to work
//       }
//       else{
//         alert('invalid password');
//       }
//     }
//     else
//     {
//       alert("Invalid Userdetails");
//     }
    
//   }

// }

