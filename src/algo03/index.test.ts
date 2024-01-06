import { convertToFahrenheit } from '.';

describe('convertToFahrenheit', () => {
  it('converts 0°C to Fahrenheit correctly', () => {
    const result = convertToFahrenheit(0);
    expect(result).toBe(32);
  });

  it('converts positive Celsius value to Fahrenheit correctly', () => {
    const result = convertToFahrenheit(25);
    expect(result).toBe(77);
  });

  it('converts negative Celsius value to Fahrenheit correctly', () => {
    const result = convertToFahrenheit(-10);
    expect(result).toBe(14);
  });

  it('converts a decimal Celsius value to Fahrenheit correctly', () => {
    const result = convertToFahrenheit(22.5);
    expect(result).toBe(72.5);
  });

  it('converts large positive Celsius value to Fahrenheit correctly', () => {
    const result = convertToFahrenheit(100);
    expect(result).toBe(212);
  });

  it('converts large negative Celsius value to Fahrenheit correctly', () => {
    const result = convertToFahrenheit(-40);
    expect(result).toBe(-40);
  });
});
