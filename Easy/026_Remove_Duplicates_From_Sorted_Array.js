/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
        // return Array.from(new Set(nums))

        let count = 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[count] !== nums[i]) {
                count++
                nums[count] = nums[i]
            }
        }
        return ++count
    };