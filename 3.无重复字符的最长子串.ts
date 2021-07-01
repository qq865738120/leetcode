/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let map = new Map<string, number>()
  let start = 0, end = 0, result = 0
  for (; end < s.length; end++) {
    if (map.has(s[end])) {
      start = Math.max(map.get(s[end]) as number, start)
    }
    result = Math.max(result, end - start + 1)
    map.set(s[end], end + 1)
  }
  return result
};
// @lc code=end

console.log(lengthOfLongestSubstring('adf234sd23sff'));
