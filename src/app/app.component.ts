import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'HTTP Client';

  constructor(public bitcoinService: BitcoinService) {}

  ngOnInit() {
    this.bitcoinService.start(1000);
  }
}
