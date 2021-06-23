import { convertion } from '../../src/utils/converter';

describe('NumberConverter.vue', () => {
  it('Check for zero', () => {
    //expect(convertion.numberToWords(0)).toMatch('zero');
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
    expect(convertion.numberToWords(40)).toMatch('fourty');
    expect(convertion.numberToWords(90)).toMatch('ninety');
  });
  it('Check for whole three digits', () =>{
    expect(convertion.numberToWords(100)).toMatch('one hundred');
    expect(convertion.numberToWords(200)).toMatch('two hundred');
    expect(convertion.numberToWords(300)).toMatch('three hundred');
  });
  it('check for bug', () =>{
    expect(convertion.numberToWords(10300)).toMatch('ten thousand three hundred');
    expect(convertion.numberToWords(1300420)).toMatch('one million three hundred thousand four hundred and twenty');
  });
});
