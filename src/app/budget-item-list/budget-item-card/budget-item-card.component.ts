import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from '../../shared/budget-item';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  // Input Data for our budget item
  @Input() item: BudgetItem | any;

  // Outputs for the xButton(deleting the card) and cardClick action(updating the card)
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  onXButtonClick(){
    // Send signal to the x button to delete the card
    this.xButtonClick.emit()
  }

  onCardClick(){
    this.cardClick.emit()
  }

  ngOnInit(): void {
  }

}
