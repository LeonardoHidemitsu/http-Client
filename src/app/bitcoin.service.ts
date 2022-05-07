import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  time: {
    updated: string;
  };
  bpi: {
    USD: {
      rate_float: number;
    };
    BRL: {
      rate_float: number;
    };
  };
}

@Injectable()
export class BitcoinService {
  current: Response;
  list: Array<Response> = [];
  private timer: any;
  private counter = 0;

  constructor(private http: HttpClient) {}

  update() {
    this.http
      .get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe((data) => {
        this.current = data;
        this.list.push(data);
      });
    if (this.counter == 60) {
      this.update();
    }
  }

  start(ms: number) {
    if (!this.timer) {
      this.counter = 0;
      this.timer = setInterval(() => {
        this.counter++;
      }, ms);
      this.update();
    }
  }

  getCount() {
    return this.counter;
  }
}
