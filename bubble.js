function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    // В конце уже отсортированные элементы, их можно исключить.
    for (let j = 0; j < array.length - i - 1; j++) {
      // Сравнение элементов: если пара элементов не отсортирована, меняем их местами.
      if (array[j] > array[j + 1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
}
