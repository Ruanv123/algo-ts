export const calculateTriangleArea = (base: number, height: number) => {
  const nonNegativeBase = Math.max(base * -1, base);
  const nonNegativeHeight = Math.max(height * -1, height);

  return (nonNegativeBase * nonNegativeHeight) / 2;
};
