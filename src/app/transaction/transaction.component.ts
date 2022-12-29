import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  acno:any//to hold currentAcno value
  transaction:any//to hold array of TransactionComponent


  constructor(private ds:DataService) { 
    this.acno=JSON.parse(localStorage.getItem('currentAcno')||"");
    this.ds.getTransaction(this.acno).subscribe(
      (result:any)=>{
       this.transaction=result.transaction
      },(result)=>{
        alert(result.error.message)
      }
    )
    

  }

  


  ngOnInit(): void {
  }

}
