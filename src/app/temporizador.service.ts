import { Injectable } from '@angular/core';

@Injectable()
export class TemporizadorService {
  private timer: any;
  private counter = 0;

  constructor() { }

  start(ms: number) {
    if (!this.timer) {
      this.counter = 0;
      this.timer = setInterval(() => {
        this.counter++;
      }, ms);
    }
  }

  getCount() {
    return this.counter;
  }

}