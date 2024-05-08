// Функция для проверки, является ли строка палиндромом
function palindrome(str) {
  str = str.toLowerCase();
  str = str.replaceAll(" ", "");
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

function isNumber(str) {
  let getNbr = str.split("");
  let numbers = "";
  for (let i = 0; i < getNbr.length; i++) {
    if (!isNaN(parseInt(getNbr[i]))) {
      numbers += getNbr[i];
    }
  }
  let newNbr = parseInt(numbers, 10);
  return newNbr;
}

//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.



//Функция для проверки длины строки.

function checkString(str, maxLength) {
  return str.length <= maxLength;
}

console.log (strLength ('Функция, которая  ', 10))
