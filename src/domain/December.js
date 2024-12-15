class December {
  #days;
  #Holidays = [25];
  constructor() {
    this.#days = [];
    for (let i = 1; i <= 31; i++) {
      const date = new Date(2024, 11, i);
      const isHoliday = date.getDay() === 0 || date.getDay() === 6;
      const day = {
        date,
        isHoliday,
        stringified: date.toLocaleString('ko-KR'),
      };

      if (!day.isHoliday && this.#Holidays.includes(day.date.getDate())) {
        day.isHoliday = true;
      }

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
