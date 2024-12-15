import December from '../../src/domain/December.js';

describe('December 클래스 단위테스트', () => {
  let december = null;

  beforeEach(() => {
    december = new December();
  });

  test('December 클래스를 인스턴스화 했을 경우 12월 달력 정보를 확인할 수 있어야 한다.', () => {
    // given
    // when
    // then
    expect(december.days).toHaveLength(31);
    console.log(new Date().toLocaleString('ko-KR'));
    console.log(new Date().getDay());
  });

  test('December 인스턴스로부터 얻은 달력 정보에는 공휴일 여부가 포함되어 있다.', () => {
    // given
    // when
    const days = december.days;

    // then
    days.forEach((day) => expect(day).toHaveProperty('isHoliday'));
  });

  test('December 인스턴스로부터 얻은 달력 정보에는 기본적으로 (결석)으로 설정된 entry 정보가 포함되어 있다.', () => {
    // given
    // when
    const days = december.days;

    // then
    days.forEach((day) =>
      expect(day.entry).toStrictEqual({
        hour: null,
        minute: null,
        status: '(결석)',
      })
    );
  });

  test('setEntry() 메소드는 day 인자에 전달된 날짜의 출결 상태를 업데이트한다.', () => {
    // given
    const expectedDay = 16;
    const entry = [10, 5, '(출석)'];

    // when
    december.setEntry(expectedDay, entry);

    // then
    const target = december.days.find(
      (day) => day.date.getDate() === expectedDay
    );
    expect(target.entry).toHaveProperty('hour', entry[0]);
    expect(target.entry).toHaveProperty('minute', entry[1]);
    expect(target.entry).toHaveProperty('status', entry[2]);
  });
});
