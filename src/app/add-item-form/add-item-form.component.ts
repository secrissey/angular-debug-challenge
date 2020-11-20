import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from '../shared/budget-item';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {


  @Input() item: BudgetItem = new BudgetItem('', 0);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter
  
  constructor() { }

  onSubmit(form: NgForm) { 
    console.log(this.formSubmit.emit(form.value));
    form.reset();
  }

  ngOnInit(): void {
  }

}
