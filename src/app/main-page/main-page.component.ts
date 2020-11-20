import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../shared/budget-item';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>()

  // Total Budget Counter
  totalBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // AddItem method (Add Items to the array)
  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem)
    this.totalBudget += newItem.amount
  }

  // Delete Method (Which will handle the deletion of each individual card)
  deleteItem(item: BudgetItem){
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index,1);
    this.totalBudget -= item.amount;
  }

  // Update Method (Which will handle the update of the individual cards)
  updateItem(updateEvent: UpdateEvent){
    // replace the item with the updated/submitted item from the form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }
}
