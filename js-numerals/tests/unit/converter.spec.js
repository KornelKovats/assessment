import { convertion } from '../../src/utils/converter';

describe('NumberConverter.vue', () => {
  it('Check for zero', () => {
    expect(convertion.numberToWords(0)).toMatch('zero');
  });
  it('Check for negativ numbers', () => {
    expect(convertion.numberToWords(-1)).toMatch('minus one');
    expect(convertion.numberToWords(-10001)).toMatch('minus ten thousand and one');
    expect(convertion.numberToWords(-999998)).toMatch('minus nine hundred and ninety-nine thousand nine hundred and ninety-eight');
  });
  it('Check for one digit', () =>{
    expect(convertion.numberToWords(1)).toMatch('one');
    expect(convertion.numberToWords(2)).toMatch('two');
    expect(convertion.numberToWords(3)).toMatch('three');
    expect(convertion.numberToWords(9)).toMatch('nine');
  });
  it('Check for two digits till 19', () =>{
    expect(convertion.numberToWords(10)).toMatch('ten');
    expect(convertion.numberToWords(11)).toMatch('eleven');
    expect(convertion.numberToWords(12)).toMatch('twelve');
    expect(convertion.numberToWords(19)).toMatch('nineteen');
  });
  it('Check for two digits from 20 to 30', () =>{
    expect(convertion.numberToWords(21)).toMatch('twenty-one');
    expect(convertion.numberToWords(22)).toMatch('twenty-two');
    expect(convertion.numberToWords(29)).toMatch('twenty-nine');
  });
  it('Check for two digits from 30 to 40', () =>{
    expect(convertion.numberToWords(31)).toMatch('thirty-one');
    expect(convertion.numberToWords(32)).toMatch('thirty-two');
    expect(convertion.numberToWords(39)).toMatch('thirty-nine');
  });
  it('Check for whole two digits', () =>{
    expect(convertion.numberToWords(30)).toMatch('thirty');
    expect(convertion.numberToWords(40)).toMatch('forty');
    expect(convertion.numberToWords(90)).toMatch('ninety');
  });
  it('Check for whole three digits', () =>{
    expect(convertion.numberToWords(100)).toMatch('one hundred');
    expect(convertion.numberToWords(200)).toMatch('two hundred');
    expect(convertion.numberToWords(300)).toMatch('three hundred');
  });
  it('Check for three digits', () =>{
    expect(convertion.numberToWords(101)).toMatch('one hundred and one');
    expect(convertion.numberToWords(202)).toMatch('two hundred and two');
    expect(convertion.numberToWords(111)).toMatch('one hundred and eleven');
    expect(convertion.numberToWords(120)).toMatch('one hundred and twenty');
  });
  it('Check for four digits', () =>{
    expect(convertion.numberToWords(1001)).toMatch('one thousand and one');
    expect(convertion.numberToWords(1201)).toMatch('twelve hundred and one');
    expect(convertion.numberToWords(1212)).toMatch('twelve hundred and twelve');
    expect(convertion.numberToWords(2111)).toMatch('two thousand one hundred and eleven');
    expect(convertion.numberToWords(2001)).toMatch('two thousand and one');
    expect(convertion.numberToWords(9999)).toMatch('nine thousand nine hundred and ninety-nine');
  });
  it('Check for five digits', () =>{
    expect(convertion.numberToWords(10000)).toMatch('ten thousand');
    expect(convertion.numberToWords(10001)).toMatch('ten thousand and one');
    expect(convertion.numberToWords(99998)).toMatch('ninety-nine thousand nine hundred and ninety-eight');
  });
  it('Check for six digits', () =>{
    expect(convertion.numberToWords(100000)).toMatch('one hundred thousand');
    expect(convertion.numberToWords(100001)).toMatch('one hundred thousand and one');
    expect(convertion.numberToWords(999998)).toMatch('nine hundred and ninety-nine thousand nine hundred and ninety-eight');
  });
  it('Check for seven digits', ()=>{
    expect(convertion.numberToWords(1000000)).toMatch('one million');
    expect(convertion.numberToWords(1000001)).toMatch('one million and one');
    expect(convertion.numberToWords(9999998)).toMatch('nine million nine hundred and ninety-nine thousand nine hundred and ninety-eight');
  });
  it('Check for numbers from README', ()=>{
    expect(convertion.numberToWords(7)).toMatch('seven');
    expect(convertion.numberToWords(42)).toMatch('forty-two');
    expect(convertion.numberToWords(2001)).toMatch('two thousand and one');
    expect(convertion.numberToWords(1999)).toMatch('nineteen hundred and ninety-nine');
    expect(convertion.numberToWords(17999)).toMatch('seventeen thousand nine hundred and ninety-nine');
    expect(convertion.numberToWords(342251)).toMatch('three hundred and forty-two thousand two hundred and fifty-one');
    expect(convertion.numberToWords(1300420)).toMatch('one million three hundred thousand four hundred and twenty');
  });
});