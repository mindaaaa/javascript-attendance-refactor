import ConsoleInput from '../infrastructure/ConsoleInput';
import { DateTimes } from '@woowacourse/mission-utils';

const days = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];

export const states = {
  display: () => {
    const today = DateTimes.now();
    const formattedDate = `${today.getMonth() + 1}월 ${today.getDate()}일 ${
      days[today.getDay()]
    }`;
    console.log(`오늘은 ${formattedDate}입니다. 기능을 선택해 주세요.`);
  },
  handleInput: async (app) => {
    const userInput = ConsoleInput.read(
      '1. 출석 확인 \n2. 출석 수정 \n3. 크루별 출석 기록 확인 \n4. 제적 위험자 확인 \nQ. 종료'
    );
    if (userInput === '1') app.setState('attendanceCheck');
    if (userInput === '2') app.setState('attendanceEdit');
    if (userInput === '3') app.setState('attendanceRecords');
    if (userInput === '4') app.setState('attendanceWarning');
    if (userInput.toUpperCase() === 'Q') app.stop('exit');
  },
};
