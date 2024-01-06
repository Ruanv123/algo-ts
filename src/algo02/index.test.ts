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

describe('calculateAverage', () => {
  it('calculates average of three positive numbers correctly', () => {
    const result = calculateAverage(5, 10, 15);
    expect(result).toBe(10);
  });

  it('calculates average of three negative numbers correctly', () => {
    const result = calculateAverage(-5, -10, -15);
    expect(result).toBe(-10);
  });

  it('calculates average of a mix of positive and negative numbers correctly', () => {
    const result = calculateAverage(8, -4, 12);
    expect(result).toBeCloseTo(5.33, 2);
  });

  it('calculates average of three zero values correctly', () => {
    const result = calculateAverage(0, 0, 0);
    expect(result).toBe(0);
  });

  it('calculates average of three decimal numbers correctly', () => {
    const result = calculateAverage(2.5, 3.5, 4.5);
    expect(result).toBe(3.5);
  });

  it('calculates average of three large numbers correctly', () => {
    const result = calculateAverage(1000000, 2000000, 3000000);
    expect(result).toBe(2000000);
  });
});
