import December from './December.js';

class Crew {
  #name;
  #calendar;

  constructor(name) {
    this.#name = name;

    this.#calendar = new December();
  }

  createEntry([hour, minute]) {
    return {
      hour,
      minute,
      status: null,
    };
  }
}

export default Crew;
