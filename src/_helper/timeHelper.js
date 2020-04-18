export function isNumber(num) {
  // check it is a number
  return !isNaN(num);
}

export function isValidLength(num) {
  // check the length of the input
  return num.length === 2;
}

export function getMinutes(minute) {
  // get the minutes
  let min = '';
  if (minute === 0) {
    min = '';
  } else if (minute > 0 && minute < 10) {
    min = `oh ${minutes[minute]}`;
  } else if (minute <= 19) {
    min = `${minutes[minute]}`;
  } else if (minute <= 59) {
    const tens = Math.floor(minute / 10);
    const remainder = minute % 10;
    min = `${ten[tens]}${minutes[remainder]}`;
  }
  return min;
}

export const hours = {
  0: 'twelve',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'one',
  14: 'two',
  15: 'three',
  16: 'four',
  17: 'five',
  18: 'six',
  19: 'seven',
  20: 'eight',
  21: 'nine',
  22: 'ten',
  23: 'eleven'
};

export const minutes = {
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
};

export const ten = {
  2: 'twenty',
  3: 'thirty',
  4: 'foury',
  5: 'fifty'
};
