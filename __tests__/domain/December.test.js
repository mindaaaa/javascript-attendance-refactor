import December from '../../src/domain/December.js';

describe('December 클래스 단위테스트', () => {
  test('December 클래스를 인스턴스화 했을 경우 12월 달력 정보를 확인할 수 있어야 한다.', () => {
    // given
    // when
    const december = new December();

    // then
    expect(december.days).toHaveLength(31);
    console.log(new Date().toLocaleString('ko-KR'));
  });
});
