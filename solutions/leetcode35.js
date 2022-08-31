function searchInsert(nums, target) {
  let possibleIndex = 0;

  if (nums[0] > target) {
    return 0;
  }

  if (nums[nums.length - 1] < target) {
    return nums.length;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      possibleIndex = i;
      return possibleIndex;
    }

    if (nums[i] < target && nums[i + 1] > target) {
      possibleIndex = i + 1;
      return possibleIndex;
    }
  }

  return possibleIndex;
}

function binarySearchInsert(nums, target, low, high) {
  if (low > high) {
    return low;
  }

  if (low === nums.length - 1) {
    return nums.length;
  }

  const mid = Math.round(low + ((high - low) / 2));

  if (nums[mid] === target) {
    return mid;
  }

  if (nums[mid] > target) {
    return binarySearchInsert(nums, target, low, mid -1);
  } else {
    return binarySearchInsert(nums, target, mid + 1, high);
  }
}

console.time('searchInsert');
console.log(searchInsert([1, 3, 5, 6], 7));
console.timeEnd('searchInsert');

console.time('binarySearchInsert');
console.log(binarySearchInsert([1, 3, 5, 6], 7, 0, 3));
console.timeEnd('binarySearchInsert');

// console.log(binarySearchInsert([1], 1, 0, 0));
