import Crew from './Crew.js';

class CrewManager {
  #crews;

  constructor(data) {
    // data[0] = { nickname, datetime }
    const nameSet = data.reduce((set, curr) => {
      set.add(curr.nickname);

      return set;
    }, new Set());

    const crews = Array.from(nameSet).map((name) => new Crew(name));

    for (const { nickname, datetime } of data) {
      const { date, hour, minute } = this.#getDatetime(datetime);
      // TODO: status는 시간에 따라 결정되도록 개선 필요함
      crews
        .find((crew) => crew.name === nickname)
        .setEntry(date, [hour, minute, '(출석)']);
    }

    this.#crews = crews;
  }

  #getDatetime(datetime) {
    return {
      date: datetime.getDate(),
      hour: datetime.getHour(),
      minute: datetime.getMinute(),
    };
  }
}

export default CrewManager;
