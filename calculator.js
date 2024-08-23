function calculateMean(nums) {
    const total = nums.reduce((acc, num) => acc + num, 0);
    return total / nums.length;
  }
  
  function calculateMedian(nums) {
    nums.sort((a, b) => a - b);
    const midIndex = Math.floor(nums.length / 2);
    return nums.length % 2 === 0
      ? (nums[midIndex - 1] + nums[midIndex]) / 2
      : nums[midIndex];
  }
  
  function calculateMode(nums) {
    const frequency = {};
    let maxFreq = 0;
    let mode = [];
  
    nums.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1;
      if (frequency[num] > maxFreq) {
        maxFreq = frequency[num];
        mode = [num];
      } else if (frequency[num] === maxFreq) {
        mode.push(num);
      }
    });
  
    return mode.length === nums.length ? null : mode;
  }
  
  module.exports = { calculateMean, calculateMedian, calculateMode };
  