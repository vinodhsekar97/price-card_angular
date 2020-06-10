import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.css']
})
export class PricingTableComponent implements OnInit {
  @Input('cardData') cardData;

  constructor() { }

  ngOnInit(): void {
  }

}
