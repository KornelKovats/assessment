/* eslint-disable no-use-before-define */
import { constants } from './constants';

// eslint-disable-next-line import/prefer-default-export
export const numberConverterToWord = (number, wordNeedsExtension) => {
  let newWord = wordNeedsExtension;
  let underNumber = constants[0].number;
  const ifThereisWord = wordNeedsExtension || 0;

  for (let i = 0; i < constants.length; i += 1) {
    if (number === constants[i].number) {
      newWord += `${constants[i].txt} ${ifThereisWord}`;
      break;
    }
    if (constants[i].number / number < 1 && number !== constants[i].number) {
      underNumber = constants[i].number;
    }
    if (constants[i].number / number > 1 && number !== constants[i].number) {
      newWord = `${numberConverterToWord(Math.floor(number / underNumber))} ${numberConverterToWord(number / Math.floor(number / underNumber))}`;
    }
  }
  return newWord;
};
