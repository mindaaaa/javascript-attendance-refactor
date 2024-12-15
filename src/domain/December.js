class December {
  #days;

  constructor() {
    this.#days = [];
    for (let i = 1; i <= 31; i++) {
      const day = new Date(2024, 11, i);
      this.#days.push(day);
    }
  }

  get days() {
    return this.#days;
  }
}

export default December;

const december = new December();
console.log(december.days);
