export const priceConverter = (price: number) => {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'EUR',
    currencyDisplay: 'symbol',
    maximumFractionDigits: 0,
  });
};

export const dateConverter = (date: string): string => {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  const month = newDate.getMonth();

  return `${year}/${month}/${day}`;
};
