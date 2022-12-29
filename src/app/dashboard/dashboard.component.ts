import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno="";
  pswd="";
  amount="";
  acno1="";
  pswd1="";
  amount1="";

  sdate:any//for date

  user="";//to connect dataservice and dashboard for user  name displaying
  depositForm=this.fb.group({//group
    // uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],//array
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  withdrawForm=this.fb.group({//group
    // uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],//array
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  constructor(private ds:DataService , private fb:FormBuilder , private router:Router) {

    if (localStorage.getItem('currentUser')) {
      this.user=JSON.parse(localStorage.getItem('currentUser')||"")//give the value to user and do string interpolattion
    }
    this.sdate=new Date()//for system date and assign to sdate and string interpolation
   }

  ngOnInit(): void {
    if(!localStorage.getItem('currentUser'))
    {
      alert('Please Login')
      this.router.navigateByUrl("");
    }
    this.user=JSON.parse(localStorage.getItem('currentUser')||"");
    console.log(this.user);
    
  }

deposit(){
  var acno=this.depositForm.value.acno;
  var pswd=this.depositForm.value.pswd;
  var amount=this.depositForm.value.amount;
this.ds.deposit(acno,pswd,amount).
subscribe((result:any)=>{
  alert(result.message)
},(result)=>{
  alert(result.error.message)
}
)

  // if (this.depositForm.valid) {
  //   if(result)
  // {
  //   alert(`${amount} is credited ... Available balance is ${result}` )
  // }
  // else{
  //   alert('Transaction error');
  // }
  // }else{
  //   alert('invalid form')
  // }
  
}

  

withdraw()
{
  
  var acno=this.withdrawForm.value.acno1;
  var pswd=this.withdrawForm.value.pswd1;
  var amount=this.withdrawForm.value.amount1;
 this.ds.withdraw(acno,pswd,amount).subscribe((result:any)=>{
  alert(result.message)
},(result)=>{
  alert(result.error.message)
}
)


  // if (this.withdrawForm.valid) {
  // //   if(result1)
  // // {
  // //   alert(`${amount} is debited ... Available balance is ${result1}` )
  // // }
  // // else{
  // //   alert('Transaction error');
  // // }
  // // }else{
  // //   alert('Invalid form')
  // }
  
}
logout(){
  //remove username and acno

  localStorage.removeItem('currentAcno')
  localStorage.removeItem('currentUser')

  this.router.navigateByUrl('')
}
delete()
{
  // alert('Delete clicked')
  this.acno=JSON.parse(localStorage.getItem('currentAcno')||'')
  
}
onCancel()
{
  this.acno="";
}
onDelete(event:any){
  // alert(event);
  this.ds.deleteAcc(event)
  .subscribe((result:any)=>{
    alert(result.message)
    this.logout()
    // this.router.navigateByUrl("");
  },result=>{
    alert(result.error.message)
  }
  )
}
}
