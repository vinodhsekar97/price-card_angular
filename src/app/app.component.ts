import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pricecard';
  cards = [
    {
      type: 'FREE',
      price: '0',
      options: [
        [true, 'Single User'],
        [true, '5GB Storage'],
        [true, 'Unlimited Public Projects'],
        [true, 'Community Access'],
        [false, 'Unlimited Private Projects'],
        [false, 'Dedicated Phone Support'],
        [false, 'Free Subdomain'],
        [false, 'Monthly Status Reports'],

      ],
    },
    {
      type: 'PLUS',
      price: '9',
      options: [
        [true, '<strong>5 Users</strong>'],
        [true, '50GB Storage'],
        [true, 'Unlimited Public Projects'],
        [true, 'Community Access'],
        [true, 'Unlimited Private Projects'],
        [true, 'Dedicated Phone Support'],
        [true, 'Free Subdomain'],
        [false, 'Monthly Staus Reports'],
      ],
    },
    {
      type: 'PRO',
      price: '49',
      options: [
        [true, '<strong>Unlimited Users,</strong>'],
        [true, '150GB Storage'],
        [true, 'Unlimited Public Projects'],
        [true, 'Community Access'],
        [true, 'Unlimited Private Projects'],
        [true, 'Dedicated Phone Support'],
        [true, '<strong>Unlimited</strong> Free Subdomains'],
        [true, 'Monthly Status Reports'],
      ],

    },




  ];
}
