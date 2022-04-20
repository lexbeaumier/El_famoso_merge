const array = [3, 6, 2, 11, 1]

const bubbleSort = array => {
  const len = array.length;
  let temp = 0;

  for (let i = 0; i < len ; i++) {
    for (let j = 0; j < len ; j++){
      if (array[j] > array[j + 1]){

        const temp = array[j];
        array[j] = array[j + 1];
        array [j +1] = temp
      }
    }
  }
  return array
}

console.log(array);
bubbleSort(array);
console.log(array);


