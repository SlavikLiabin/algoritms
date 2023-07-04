function merge(left, right) {
  // Создаём массив, в котором будем соединять два подмассива.
  const result = new Array(left.length + right.length);
  // Создаём индексы, с помощью которых будем проходить по подмассивам.
  let i = 0;
  let j = 0;

  // Проходим по подмассивам
  while (i < left.length && j < right.length) {
    // Выбираем меньший из двух элементов и помещаем его в итоговый массив.
    if (left[i] < right[j]) {
      array[i + j] = left[i];
      i++;
    } else {
      array[i + j] = right[j];
      j++;
    }
  }

  // Добавляем оставшиеся элементы из левого подмассива, если правый закончился раньше.
  while (i < left.length) {
    array[i + j] = left[i];
    i++;
  }

  // Добавляем оставшиеся элементы из правого подмассива, если левый кончился раньше.
  while (j < right.length) {
    array[i + j] = right[i];
    j++;
  }

  return result;
}

function mergeSort(array) {
  if (array.length < 2) {
    // Пустой массив или массив из одного элемента — не нуждается в сортировке.
    return array;
  }

  // Делим массив пополам
  const middle = Math.round(array.length / 2);
  const left = array.splice(0, middle);

  // Рекурсивно сортируем каждую из половин и соединяем их
  return merge(mergeSort(left), mergeSort(array));
}
