function quickSort(array) {
  if (array.length < 2) {
    // Пустой массив или массив из одного элемента — не нуждается в сортировке.
    return array;
  }

  // Выбираем опорный элемент (например, первый)
  let pivot = array[0];
  // Будем делить массив на три массива: левый (меньше опорного), правый (больше опорного), центральный (равен опорному).
  const left = [];
  const middle = [pivot];
  const right = [];

  // Проходим по массиву, не включая опорный элемент, и раскладываем элементы по подмассивам.
  for (let i = 1; i < array.length; i++) {
    if (pivot === array[i]) {
      middle.push(array[i]);
    } else if (pivot > array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // Рекурсивно сортируем левый и правый подмассивы и возвращаем итоговую комбинацию элементов.
  return quickSort(left).concat(middle, quickSort(right));
}
