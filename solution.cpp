int maxCoins(vector<int>& nums) {
    int n = nums.size();
    nums.insert(nums.begin(), 1);
    nums.insert(nums.end(), 1);
    vector<vector<int>> dp(nums.size(), vector<int>(nums.size(), 0));