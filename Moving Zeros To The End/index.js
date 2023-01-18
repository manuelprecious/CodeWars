function moveZeros(arr) {
  let newArr = [];
  let zerosArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zerosArr.push(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr.concat(zerosArr);
  //    return [...newArr, ...zerosArr];
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
