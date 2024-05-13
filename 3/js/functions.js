// Функция для проверки, является ли строка палиндромом

function palindrome(str) {
  str = str.toLowerCase();
  str = str.replaceAll(' ', '');
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

console.log (palindrome('топот'));

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

function isNumber(str) {
  let getNbr = str.split('');
  let numbers = '';

  for (let i = 0; i < getNbr.length; i++) {
    if (!isNaN(parseInt(getNbr[i]))) {
      numbers += getNbr[i];
    }
  }

  let newNbr = parseInt(numbers, 10);

  return newNbr;
}

console.log (isNumber('2023 год'));

//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.

function padString(str, minLength, padding) {
  if (str.length >= minLength) {
    return str;
  }

  let paddingLength = minLength - str.length;

  if (padding.length <= paddingLength) {
    return padding.substring(0, paddingLength) + str;
  } else {
    return padding.substring(0, paddingLength) + str;
  }
}

console.log (padString('q', 4, 'werty'));

//Функция для проверки длины строки.

function checkString(str, maxLength) {
  return str.length <= maxLength;
}

console.log (checkString('проверяемая строка', 20));
