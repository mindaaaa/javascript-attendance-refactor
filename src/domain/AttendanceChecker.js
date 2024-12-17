const CONSTANT = {
  OPERATING_START_TIME: 8,
  OPERATING_END_TIME: 23,
  MONDAY_CHECK_IN: 13,
  MONDAY_CHECK_OUT: 18,
  CHECK_IN: 10,
  CHECK_OUT: 18,
  LATE_TIME: 5,
  ARRIVAL_TIME: 30,
};

// 캠퍼스 운영 시간: 8시~23시
class AttendanceChecker {
  attendOnMonday([hour, minute]) {
    if (!this.#isCampusOpen()) {
      throw new Error('[ERROR] 운영 시간은 8시~23시입니다.');
    }

    if (this.#isAbsent(CONSTANT.MONDAY_CHECK_IN, hour, minute)) {
      return '(결석)';
    }

    if (this.#isLate(CONSTANT.MONDAY_CHECK_IN, hour, minute)) {
      return '(지각)';
    }

    return '(출석)';
  }

  attend([hour, minute]) {
    if (!this.#isCampusOpen()) {
      throw new Error('[ERROR] 운영 시간은 8시~23시입니다.');
    }

    if (this.#isAbsent(CONSTANT.CHECK_IN, hour, minute)) {
      return '(결석)';
    }

    if (this.#isLate(CONSTANT.CHECK_IN, hour, minute)) {
      return '(지각)';
    }

    return '(출석)';
  }

  #isCampusOpen(hour) {
    return (
      hour > CONSTANT.OPERATING_START_TIME && hour < CONSTANT.OPERATING_END_TIME
    );
  }

  #isLate(availableTime, hour, minute) {
    if (availableTime > hour) {
      return false;
    }

    if (availableTime === hour) {
      return minute > CONSTANT.LATE_TIME;
    }

    return false;
  }

  #isAbsent(availableTime, hour, minute) {
    if (hour === availableTime) {
      return minute > CONSTANT.ARRIVAL_TIME;
    }

    return availableTime < hour;
  }
}

export default AttendanceChecker;

const checker = new AttendanceChecker();
