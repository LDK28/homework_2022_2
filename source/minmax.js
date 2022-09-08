'use strict'
/**
 *  Функция minmax находит минимальное и максимальное значения в строке.
 *  Возвращает массив, в котором первый элемент — это минимальное число в строке, второй элемент — максимальное.
 * 
 * @param {string} stringWithNumbers - строка содержащаяя числа.
 * @return {number[]} массив из двух чисел (минимальное и максимальное).
 * @throws {TypeError} выбрасывается ошибка 'EXPECTED_STRING', если аргумент stringWithNumbers не типа string.
 */
const minmax = (stringWithNumbers) => {
    if (typeof stringWithNumbers !== 'string') {
        throw new TypeError('EXPECTED_STRING');
    }
    const regularExpression = /(-?(\d+)?\.?\d+e?-?(\d+)?)|(-?Infinity)/g;
    const numbers = stringWithNumbers.match(regularExpression)?.map(item => Number(item));
    return numbers ? [Math.min(...numbers), Math.max(...numbers)] : [undefined, undefined];
};
