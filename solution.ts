function maxCoins(nums: number[]): number {
    const n = nums.length;
    const newNums = new Array(n + 2);
    newNums[0] = newNums[n + 1] = 1;
    for (let i = 1; i <= n; i++) {
        newNums[i] = nums[i - 1];
    }
}