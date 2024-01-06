import { convertToFahrenheint } from '.';

describe('convertToFahrenheint', () => {
  it('should convert celsius to fahrenheint', () => {
    expect(convertToFahrenheint(0)).toBe(32);
    expect(convertToFahrenheint(100)).toBe(212);
  });

  it('convert 0 graus celsius to 32 graus fahrenheint', () => {
    expect(convertToFahrenheint(0)).toBe(32);
    expect(convertToFahrenheint(0)).not.toBe(0);
  });

  it('return 36 graus celsius to 96.8 graus fahrenheint', () => {
    expect(convertToFahrenheint(36)).toBe(96.8);
    expect(convertToFahrenheint(36)).not.toBe(0);
  });

  it('convert negative celsius to fahrenheint', () => {
    expect(convertToFahrenheint(-10)).toBe(14);
    expect(convertToFahrenheint(-10)).not.toBe(0);
  });

  it('handles decimal values', () => {
    expect(convertToFahrenheint(15.5)).toEqual(59.9);
    expect(convertToFahrenheint(-10)).not.toBe(0);
  });
});
