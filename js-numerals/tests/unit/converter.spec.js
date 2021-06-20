import { numberConverterToWord } from '../../src/utils/converter';

describe('NumberConverter.vue', () => {
  it('gives back asd', () => {
    expect(numberConverterToWord(2)).toMatch('4');
  });
});
