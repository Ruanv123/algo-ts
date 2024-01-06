export const convertToFahrenheit = (celsius: number) => {
  const tf = (celsius * 9 + 160) / 5;

  return tf;
};
