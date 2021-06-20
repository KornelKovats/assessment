import { constants } from './constants';

// eslint-disable-next-line import/prefer-default-export
export const numberConverterToWord = (number) => {
  let word = '';
  constants.forEach((element) => {
    if (number === element.number) {
      word += element.txt;
    }
  });
  return word;
};
