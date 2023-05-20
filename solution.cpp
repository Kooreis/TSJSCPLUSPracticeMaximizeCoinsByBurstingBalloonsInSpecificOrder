```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int maxCoins(vector<int>& nums) {
    int n = nums.size();
    nums.insert(nums.begin(), 1);
    nums.insert(nums.end(), 1);
    vector<vector<int>> dp(nums.size(), vector<int>(nums.size(), 0));
    for (int len = 1; len <= n; ++len) {
        for (int left = 1; left <= n - len + 1; ++left) {
            int right = left + len - 1;
            for (int k = left; k <= right; ++k) {
                dp[left][right] = max(dp[left][right], 
                nums[left - 1] * nums[k] * nums[right + 1] + dp[left][k - 1] + dp[k + 1][right]);
            }
        }
    }
    return dp[1][n];
}

int main() {
    vector<int> nums = {3, 1, 5, 8};
    cout << maxCoins(nums) << endl;
    return 0;
}
```