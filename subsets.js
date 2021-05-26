var subsets = function(nums) {
    var res = [], arr = [];
    nums.sort((a,b) => a-b);
    var len = nums.length;

    var backtrack = function(res, arr, nums, index){
        res.push([...arr]);
        for(let i = index; i < len; i++){
            if( i > index && nums[i] == nums[i-1]) continue;
            arr.push(nums[i]);
            backtrack(res, arr, nums, i+1);
            arr.pop();
        }
    }
    backtrack(res, arr, nums, 0);
    return res;
};

var nums = [1,2,2];
console.log(subsets(nums));