// Функция для проверки, является ли строка палиндромом

const palindrome = (str) => {
  const formattedString = str.toLowerCase().replaceAll(' ', '');
  const reversedString = formattedString.split('').reverse().join('');
  return str === reversedString;
};

palindrome('Лёша на полке клопа нашёл ');

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

const isNumber = (str) => {
  const getNumber = str.split('');
  let numbers = '';

  for (let i = 0; i < getNumber.length; i++) {
    if (!isNaN(parseInt(getNumber[i], 10))) {
      numbers += getNumber[i];
    }
  }

  return parseInt(numbers, 10);

};

isNumber('2023 год');

//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.

const padString = (str, minLength, padding) => {
  if (str.length >= minLength) {
    return str;
  }

  const paddingLength = minLength - str.length;

  if (padding.length <= paddingLength) {
    return padding.substring(0, paddingLength) + str;
  } else {
    return padding.substring(0, paddingLength) + str;
  }
};

padString('q', 4, 'werty');

//Функция для проверки длины строки.

const checkString = (str, maxLength) => str.length <= maxLength;

checkString('проверяемая строка', 20);

