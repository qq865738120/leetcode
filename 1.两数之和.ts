/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const hasMap: any = {}
  let result: number[] = []
  nums.map((item, index) => {
    const num = target - item
    if (hasMap.hasOwnProperty(num + '')) {
      result = [hasMap[num], index]
    } else {
      hasMap[item] = index
    }
  })
  return result;
};
// @lc code=end
console.log(twoSum([2,7,11,15], 9));
