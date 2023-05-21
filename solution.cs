function maxCoins(nums) {
    let n = nums.length;
    let input = new Array(n + 2);
    for (let i = 0; i < n; i++) {
        input[i + 1] = nums[i];
    }
    input[0] = input[n + 1] = 1;
}