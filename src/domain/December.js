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

        // null null (결석)이면 아예 그 날 출석을 안한 결석이거나, 아직 출석하지 않은 미래의 날짜임
        entry: {
          hour: null,
          minute: null,
          status: '(결석)',
        },
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

  setEntry(day, [hour, minute, status]) {
    const target = this.#days.find((item) => item.date.getDate() === day);

    target.entry.hour = hour;
    target.entry.minute = minute;
    target.entry.status = status;
  }
}

export default December;

const december = new December();
console.log(december.days);
