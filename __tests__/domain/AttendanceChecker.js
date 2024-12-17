import AttendanceChecker from '../../src/domain/AttendanceChecker.js';

describe('AttendanceChecker 클래스 단위테스트', () => {
  let checker = null;

  beforeEach(() => {
    checker = new AttendanceChecker();
  });
  test('attend 메서드는 캠퍼스 운영시간이 아니면 ERROR를 던진다.', () => {
    // given
    // when
    const result = checker.attend([7, 20]);

    // then
    expect(result).toThrow('[ERROR]');
  });

  test('attend 메서드는 5분까지 (출석)을 return한다. ', () => {
    // given
    // when
    const result = checker.attend([10, 5]);

    // then
    expect(result).toBe('(출석)');
  });

  test('attend 메서드는 5분을 초과하면 (지각)을 return한다. ', () => {
    // given
    // when
    const result = checker.attend([10, 20]);

    // then
    expect(result).toBe('(지각)');
  });

  test('attend 메서드는 30분을 초과하면 (결석)을 return한다. ', () => {
    // given
    // when
    const result = checker.attend([11, 5]);

    // then
    expect(result).toBe('(결석)');
  });
});
