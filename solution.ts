Here is a TypeScript solution for the problem:

```typescript
function maxCoins(nums: number[]): number {
    const n = nums.length;
    const newNums = new Array(n + 2);
    newNums[0] = newNums[n + 1] = 1;
    for (let i = 1; i <= n; i++) {
        newNums[i] = nums[i - 1];
    }
    const dp = Array.from(new Array(n + 2), () => new Array(n + 2).fill(0));
    for (let len = 1; len <= n; len++) {
        for (let i = 1; i + len - 1 <= n; i++) {
            const j = i + len - 1;
            for (let k = i; k <= j; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[i][k - 1] + newNums[i - 1] * newNums[k] * newNums[j + 1] + dp[k + 1][j]);
            }
        }
    }
    return dp[1][n];
}

console.log(maxCoins([3, 1, 5, 8]));
```

This solution uses dynamic programming to solve the problem. It first adds 1 to the beginning and end of the array, then initializes a 2D array dp to store the maximum number of coins that can be obtained by bursting balloons from i to j. It then iterates over the length of the subarray from 1 to n, and for each length, it iterates over the start index of the subarray from 1 to n - len + 1. For each subarray, it iterates over the index of the last balloon to burst from i to j, and updates dp[i][j] to the maximum of its current value and the number of coins obtained by bursting all balloons from i to k - 1, bursting balloon k, and bursting all balloons from k + 1 to j. Finally, it returns dp[1][n], which is the maximum number of coins that can be obtained by bursting all balloons.