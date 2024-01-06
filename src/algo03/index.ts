export const convertToFahrenheint = (celsius: number) => {
  const tf = (celsius * 9 + 160) / 5;

  return tf;
};
