class Chronometer {
  constructor() {
    this.currentTime= 0;
    this.intervalId= null;
  }

  // interval para almacenar min
  start(printTimeCallback) {
      this.printTimeCallback = printTimeCallback;
  
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if (this.printTimeCallback) {
          this.printTimeCallback(this.currentTime);
        }
      }, 1000);
    }




  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? "0" + value : value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
