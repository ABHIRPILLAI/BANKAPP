import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  acno='';
  pswd='';
  uname='';
//register model
  registerForm=this.fb.group({//group
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],//array
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
//control---ts file model link to html file
  constructor(private router:Router, private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register()
  {
    console.log(this.registerForm);
    

    // alert('')

    var username=this.registerForm.value.uname;
    var password=this.registerForm.value.pswd;
    var acno=this.registerForm.value.acno;

    if(this.registerForm.valid)
    {
      console.log(this.registerForm.get('uname')?.errors);
     this.ds.register(acno,username,password)
      .subscribe((result:any)=>{
        alert( result.message);
        this.router.navigateByUrl('')
      })
    // if(result)
    // {
    // alert('Register Successful');
    // this.router.navigateByUrl('')
    // }
    // else{
    //   alert('Register Failed');
    //   this.router.navigateByUrl('register')
    // }
    }else{
      alert('invalid form')
    }









  }

}
