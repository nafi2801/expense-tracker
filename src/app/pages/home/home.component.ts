import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  modalOpen = false;

  transactionType: 'Expense' | 'Income' = 'Expense';

  transaction = {
    name: '',
    amount: null,
    category: '',
    paymentMethod: '',
    date: '',
    type: 'Expense'
  };

  toggleModal() {
    this.modalOpen = !this.modalOpen;
    if (this.modalOpen) {
      this.transaction.type = this.transactionType;
    }
  }

  submitForm() {
    this.transaction.type = this.transactionType;

    console.log('Transaction added:', this.transaction);

    this.modalOpen = false;

    this.transaction = {
      name: '',
      amount: null,
      category: '',
      paymentMethod: '',
      date: '',
      type: this.transactionType
    };
  }
}
