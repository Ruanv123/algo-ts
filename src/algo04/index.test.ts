import { calculateRectanglePerimeter } from '.';

describe('calculateRectanglePerimeter', () => {
  it('calculates perimeter for positive base and positive height', () => {
    const result = calculateRectanglePerimeter(3, 4);
    expect(result).toBe(14);
  });

  it('calculates perimeter for negative base and positive height', () => {
    const result = calculateRectanglePerimeter(-3, 4);
    expect(result).toBe(14);
  });

  it('calculates perimeter for positive base and negative height', () => {
    const result = calculateRectanglePerimeter(3, -4);
    expect(result).toBe(14);
  });

  it('calculates perimeter for negative base and negative height', () => {
    const result = calculateRectanglePerimeter(-3, -4);
    expect(result).toBe(14);
  });

  it('calculates perimeter for zero base and positive height', () => {
    const result = calculateRectanglePerimeter(0, 5);
    expect(result).toBe(10);
  });

  it('calculates perimeter for positive base and zero height', () => {
    const result = calculateRectanglePerimeter(3, 0);
    expect(result).toBe(6);
  });

  it('calculates perimeter for zero base and zero height', () => {
    const result = calculateRectanglePerimeter(0, 0);
    expect(result).toBe(0);
  });
});
