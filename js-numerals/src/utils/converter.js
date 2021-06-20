/* eslint-disable no-use-before-define */
import { constants } from './constants';

// eslint-disable-next-line import/prefer-default-export
export const numberConverterToWord = (number) => {
  const word = '';
  // eslint-disable-next-line prefer-const
  const convertedWord = convertRecursion(number, word);
  return convertedWord;
};
function convertRecursion(number, wordNeedsExtension) {
  let newWord = wordNeedsExtension;
  let underNumber;
  constants.forEach((element) => {
    if (number === element.number) {
      newWord += `${element.txt} ${wordNeedsExtension}`;
    }
    if (element.number / number < 1 && number !== element.number) {
      underNumber = element.number;
    }
    if (element.number / number > 1 && number !== element.number) {
      convertRecursion(Math.floor(number / underNumber), newWord);
    }
  });
  return newWord;
}
