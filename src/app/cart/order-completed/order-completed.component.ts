import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-completed',
  templateUrl: './order-completed.component.html',
  styleUrls: ['./order-completed.component.css']
})
export class OrderCompletedComponent implements OnInit {
  firstName: string | null = '';
  totalPrice: number | null = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.firstName = params.get('firstName');
      this.totalPrice = Number(params.get('totalPrice'));
    });
  }
}
