import { calculateAverage } from '.';

describe('calculateAverage', () => {
  it('return the average of this 3 numbers', () => {
    expect(calculateAverage(2, 2, 2)).toBe(2);
    expect(calculateAverage(2, 2, 2)).not.toBe(3);
  });
  it('return the average of this 3 numbers', () => {
    expect(calculateAverage(10, 10, 10)).toBe(10);
    expect(calculateAverage(10, 10, 10)).not.toBe(11);
  });
});
