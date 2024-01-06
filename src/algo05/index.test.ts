import { calculateTriangleArea } from '.';

describe('calculateTriangleArea', () => {
  it('calculates area for positive base and positive height', () => {
    const result = calculateTriangleArea(3, 4);
    expect(result).toBe(6);
  });

  it('calculates area for negative base and positive height', () => {
    const result = calculateTriangleArea(-3, 4);
    expect(result).toBe(6);
  });

  it('calculates area for positive base and negative height', () => {
    const result = calculateTriangleArea(3, -4);
    expect(result).toBe(6);
  });

  it('calculates area for negative base and negative height', () => {
    const result = calculateTriangleArea(-3, -4);
    expect(result).toBe(6);
  });

  it('calculates area for zero base and positive height', () => {
    const result = calculateTriangleArea(0, 5);
    expect(result).toBe(0);
  });

  it('calculates area for positive base and zero height', () => {
    const result = calculateTriangleArea(3, 0);
    expect(result).toBe(0);
  });

  it('calculates area for zero base and zero height', () => {
    const result = calculateTriangleArea(0, 0);
    expect(result).toBe(0);
  });

  it('calculates area for decimal base and height', () => {
    const result = calculateTriangleArea(2.5, 4);
    expect(result).toBe(5);
  });

  it('calculates area for large base and height', () => {
    const result = calculateTriangleArea(100, 200);
    expect(result).toBe(10000);
  });
});
