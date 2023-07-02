function linearSearch(arr, target) {
  // Перебираем все элементы массива
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      // нашли!
      return true;
    }
  }
  // не нашли
  return false;
}
