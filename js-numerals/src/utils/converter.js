import { constants } from './constants';

// eslint-disable-next-line import/prefer-default-export
export const numberConverterToWord = (number) => {
  const word = '';
  // eslint-disable-next-line no-use-before-define
  convertRecursion(number, word);
  return word;
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
