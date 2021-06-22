/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
import { constants } from './constants';

// eslint-disable-next-line import/prefer-default-export
export const numberConverterToWord = (num) => {
  let newWord = '';
  let underNumber = constants[0].number;

  for (const { number, txt } of constants) {
    if (num === number) {
      newWord = `${txt}`;
      break;
    }
    if (number / num < 1 && num !== number) {
      underNumber = number;
    }
    if (number / num > 1 && num !== number
        && betweenTwentyAndHoundred(num)) {
      newWord = `${numberConverterToWord(underNumber)}-${numberConverterToWord(num - underNumber)}`;
    }
    if (number / num > 1 && num !== number
         && greaterThanHoundred(num)) {
      const remainder = getRemainder(num, underNumber);
      if (remainder === 0) {
        newWord = `${numberConverterToWord(Math.floor(num / underNumber))} ${numberConverterToWord(underNumber)}`;
      } else {
        newWord = `${numberConverterToWord(Math.floor(num / underNumber))} ${numberConverterToWord(underNumber)} ${numberConverterToWord(remainder)}`;
      }
    }
  }
  return newWord;
};

function greaterThanHoundred(number) {
  return number > 99;
}
function betweenTwentyAndHoundred(number) {
  return number > 20 && number < 100;
}
function getRemainder(number, underNumber) {
  return number - (Math.floor(number / underNumber) * underNumber);
}
