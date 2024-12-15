import December from './December.js';

class Crew {
  #name;
  #calendar;

  constructor(name) {
    this.#name = name;
    this.#calendar = new December();
  }

  setEntry(day, [hour, minute, status]) {
    this.#calendar.setEntry(day, [hour, minute, status]);
  }

  get name() {
    return this.#name;
  }
}

export default Crew;
