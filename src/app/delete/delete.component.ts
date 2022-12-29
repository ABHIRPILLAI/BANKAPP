import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {


  @Input() item:string | undefined //input is a decorator,used to hold data from parent
  @Output() onCancel= new EventEmitter(); //child to parent data ,hold data from child component
  @Output() onDelete=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  cancel()
  {
    // alert("Clicked");
    //oncancl namal create cheythe event aan
    this.onCancel.emit()
  }
  delete()
  {
    this.onDelete.emit(this.item)  }
}
