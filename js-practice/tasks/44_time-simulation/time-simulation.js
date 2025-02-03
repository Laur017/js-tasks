export class TimeSimulation {
  constructor() {
    this.realTime = 0;
    this.speed = 1;
    this.simulatedTime = 0;
  }
  get() {
    return this.simulatedTime;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  update(time) {
    this.simulatedTime += (time - this.realTime) * this.speed;
    this.realTime = time;
    if (this.simulatedTime < 0) throw new Error('Time can not be negative!');
  }
}
