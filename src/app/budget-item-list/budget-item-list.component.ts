import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from '../shared/budget-item';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

export interface UpdateEvent{
  old: BudgetItem;
  new: BudgetItem;
}

// TODO Add Modal 
@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[] = []

  // Adding Outputs for Updates and Deletes
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog:MatDialog) { }

  onDelete(item: BudgetItem){
    this.delete.emit(item);
  }

  //Update Method
  onCardClicked(item: BudgetItem){
    // Show the Edit Modal from Angular Material
    const dialogref = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    })

    // Handle the dialog box after the user clicks away
    dialogref.afterClosed().subscribe(result => {
      if(result){
        this.update.emit({
          old:item,
          new:result
        })
      }
    })
  }

  ngOnInit(): void {
  }

}
