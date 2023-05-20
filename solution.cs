Here is a JavaScript solution for the problem:

```javascript
function maxCoins(nums) {
    let n = nums.length;
    let input = new Array(n + 2);
    for (let i = 0; i < n; i++) {
        input[i + 1] = nums[i];
    }
    input[0] = input[n + 1] = 1;

    let dp = new Array(n + 2);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 2).fill(0);
    }

    for (let len = 1; len <= n; len++) {
        for (let left = 1; left <= n - len + 1; left++) {
            let right = left + len - 1;
            for (let i = left; i <= right; i++) {
                dp[left][right] = Math.max(dp[left][right], 
                    input[left - 1] * input[i] * input[right + 1] + dp[left][i - 1] + dp[i + 1][right]);
            }
        }
    }
    return dp[1][n];
}

console.log(maxCoins([3, 1, 5, 8]));
```

This console application uses dynamic programming to solve the problem. It first initializes an array `input` with the balloon values, with 1 added at both ends. Then it initializes a 2D array `dp` to store the maximum number of coins that can be obtained by bursting balloons from index `i` to `j` in `input`. It then iterates over all possible lengths of subarrays and all possible starting points of these subarrays, and for each subarray, it tries bursting all balloons and updates `dp[i][j]` with the maximum coins that can be obtained. Finally, it returns `dp[1][n]`, which is the maximum coins that can be obtained by bursting all balloons.