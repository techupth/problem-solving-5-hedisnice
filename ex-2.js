function moveZeroes(nums) {
  let result = [];
  let zeroesCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      result.push(nums[i]);
    } else {
      zeroesCount++;
    }
  }

  while (zeroesCount > 0) {
    result.push(0);
    zeroesCount--;
  }

  return result;
}

console.log(moveZeroes([0, 1, 0, 3, 1, 12]));
