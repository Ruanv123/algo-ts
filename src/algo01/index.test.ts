import { addTwoNumbers } from './index';

describe('addTwoNumbers', () => {
  it('adds two positive numbers correctly', () => {
    const result = addTwoNumbers(5, 10);
    expect(result).toBe(15);
  });

  it('adds two negative numbers correctly', () => {
    const result = addTwoNumbers(-5, -10);
    expect(result).toBe(-15);
  });

  it('adds a positive and a negative number correctly', () => {
    const result = addTwoNumbers(8, -4);
    expect(result).toBe(4);
  });

  it('adds two decimal numbers correctly', () => {
    const result = addTwoNumbers(2.5, 3.5);
    expect(result).toBe(6);
  });

  it('adds two large numbers correctly', () => {
    const result = addTwoNumbers(1000000, 2000000);
    expect(result).toBe(3000000);
  });
});
