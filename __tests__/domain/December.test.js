import December from '../../src/domain/December.js';

describe('December 클래스 단위테스트', () => {
  test('December 클래스를 인스턴스화 했을 경우 12월 달력 정보를 확인할 수 있어야 한다.', () => {
    // given
    // when
    const december = new December();

    // then
    expect(december.days).toHaveLength(31);
    console.log(new Date().toLocaleString('ko-KR'));
    console.log(new Date().getDay());
  });

  test('December 인스턴스로부터 얻은 달력 정보에는 공휴일 여부가 포함되어 있다.', () => {
    // given
    const december = new December();

    // when
    const days = december.days;
    // const result = days.every((day) => {
    //   return Reflect.has(day, 'isHoliday');
    // });

    // then
    days.map((day) => expect(day).toHaveProperty('isHoliday'));
    //expect(result).toBe(true);
  });
});
