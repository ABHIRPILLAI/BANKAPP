import { Component, OnInit } from '@angular/core';

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

  userDetail:any=
  {
    1000:{acno:1000,username:'Abhi',password:1000,balance:1000},
    1001:{acno:1001,username:'Abhilash',password:1001,balance:1000001},
    1002:{acno:1002,username:'Abhilash Radhakarishna Pillai',password:1002,balance:100002}
  }
  //(3rd execution)
//class-collection fo properties/methods
//userdefined methods  ---//(4rth execution)
  constructor() { }//(1st execution)
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

  login()
  {
    // alert('Login Clicked');//event binding
    var acnoo=this.acno;//
    var pswdd=this.pswd;
    var userDetails=this.userDetail
    if(acnoo in userDetails)//variables
    {
      if(pswdd==userDetails[acnoo]['password'])///pswd varible kitia value userdetailsile acno and athinte corresponding passwrd ayit match ondo noknm
      {
        alert('Login Successful');
      }
      else{
        alert('invalid password');
      }
    }
    else
    {
      alert("Invalid Userdetails");
    }
    
  }

}

