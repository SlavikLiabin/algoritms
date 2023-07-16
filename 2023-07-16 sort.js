const strArr = ['denis', 'bill', 'anna']

const numrArr = [10, 7, 44, 15, 28]

strArr.sort();

numrArr.sort((prev, next) => next - prev);

console.log(numrArr)