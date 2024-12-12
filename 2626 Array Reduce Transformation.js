/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;
    let len = nums.length;
    if ( len == 0) return init;
    for(let i=0;i<len;i++){
        val = fn(val, nums[i]);
    }
    return val;
};