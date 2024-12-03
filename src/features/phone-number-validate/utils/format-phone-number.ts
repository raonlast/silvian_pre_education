export const formatPhoneNumber = (value: string): string => {
  const numericValue = value.replace(/\D/g, '');

  if (numericValue.length <= 3) {
    return numericValue;
  }

  if (numericValue.length <= 7) {
    return `${numericValue.slice(0, 3)}-${numericValue.slice(3)}`;
  }

  return `${numericValue.slice(0, 3)}-${numericValue.slice(
    3,
    7,
  )}-${numericValue.slice(7)}`;
};
