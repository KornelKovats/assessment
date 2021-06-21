/* eslint-disable no-use-before-define */
import { constants } from './constants';

// eslint-disable-next-line import/prefer-default-export
export const numberConverterToWord = (number) => {
  let newWord = '';
  let underNumber = constants[0].number;

  for (let i = 0; i < constants.length; i += 1) {
    if (number === constants[i].number) {
      newWord = `${constants[i].txt}`;
      break;
    }
    if (constants[i].number / number < 1 && number !== constants[i].number) {
      underNumber = constants[i].number;
    }
    if (constants[i].number / number > 1 && number !== constants[i].number
        && betweenTwentyAndHoundred(number)) {
      newWord = `${numberConverterToWord(underNumber)}-${numberConverterToWord(number - underNumber)}`;
    }
    if (constants[i].number / number > 1 && number !== constants[i].number
         && greaterThanHoundred(number)) {
      const remainder = getRemainder(number, underNumber);
      if (remainder === 0) {
        newWord = `${numberConverterToWord(Math.floor(number / underNumber))} ${numberConverterToWord(underNumber)}`;
      } else {
        newWord = `${numberConverterToWord(Math.floor(number / underNumber))} ${numberConverterToWord(underNumber)} ${numberConverterToWord(remainder)}`;
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
