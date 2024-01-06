import { addTwoNumbers } from './index';

describe('sum functest', () => {
  it('return 6 with result', () => {
    expect(addTwoNumbers(3, 3)).toBe(6);
  });

  it('return 5 with result', () => {
    expect(addTwoNumbers(15, -10)).toBe(5);
  });

  it('return false for 2 plu equals 7', () => {
    expect(addTwoNumbers(2, 3)).not.toBe(7);
  });
});
