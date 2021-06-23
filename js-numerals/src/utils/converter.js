import { constants } from './constants';

export const convertion = {
  numberToWords(number) {
    let word = '';
    const absNumber = Math.abs(number);
    if (number === 0) {
      return 'zero';
    }
    if (number.toString().length === 4) {
      word = this.getForDigitWord(absNumber);
    } else {
      word = this.convertNumberToWord(absNumber);
    }
    return (number < 0) ? `minus ${word}` : word;
  },
  convertNumberToWord(numberToConvert) {
    let newWord = '';
    let smallerNumber = constants.one;
    let smallerNumberWord = 'one';
    let remainder = numberToConvert;
    for (const [word, number] of Object.entries(constants)) {
      if (numberToConvert === number && numberToConvert >= 100) {
        return `one ${word}`;
      }
      if (numberToConvert === number && numberToConvert < 100) {
        return word;
      }
      if (number < numberToConvert) {
        smallerNumber = number;
        smallerNumberWord = word;
        remainder = this.getRemainder(numberToConvert, smallerNumber);
      }
      if (number > numberToConvert) break;
    }

    if (this.betweenTwentyAndHundred(numberToConvert)) {
      const counter = smallerNumberWord;
      const convertedRemainder = this.convertNumberToWord(remainder);
      newWord = `${counter}-${convertedRemainder}`;
    }

    if (this.greaterThanHundred(numberToConvert)) {
      const summoner = this.convertNumberToWord(Math.floor(numberToConvert / smallerNumber));
      const counter = smallerNumberWord;
      const convertedRemainder = this.convertNumberToWord(remainder);
      if (!remainder) {
        newWord = `${summoner} ${counter}`;
      } else if (remainder > 0 && smallerNumber >= 1000 && remainder < 100) {
        newWord = `${summoner} ${counter} and ${convertedRemainder}`;
      } else if (remainder > 0 && smallerNumber === 100) {
        newWord = `${summoner} ${counter} and ${convertedRemainder}`;
      } else {
        newWord = `${summoner} ${counter} ${convertedRemainder}`;
      }
    }
    return newWord;
  },
  getForDigitWord(number) {
    const counter = Math.floor(number / 100);
    const remainder = number - counter * 100;
    const houndreds = Object.keys(constants).find((key) => constants[key] === counter);
    if (!remainder && counter > 10 && counter < 20) {
      return `${houndreds} hundred`;
    }
    if (remainder && counter > 10 && counter < 20) {
      return `${houndreds} hundred and ${this.convertNumberToWord(remainder)}`;
    }
    return this.convertNumberToWord(number);
  },
  greaterThanHundred(number) {
    return number > 99;
  },
  betweenTwentyAndHundred(number) {
    return number > 20 && number < 100;
  },
  getRemainder(minuend, subtrahend) {
    return minuend - (Math.floor(minuend / subtrahend) * subtrahend);
  },
};
