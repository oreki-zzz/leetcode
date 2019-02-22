/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function (nums1, m, nums2, n) {
    let j = 0
    for(let i = m; i < m + n; i++) {
        nums1[i] = nums2[j++]
    }

    nums1.sort(function(a, b) { return a - b })
};