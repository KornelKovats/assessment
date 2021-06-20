import { converter } from '../../src/utils/converter';

describe('NumberConverter.vue', () => {
  it('gives back asd', () => {
    expect(converter()).toMatch('asd');
  });
});
