/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function(text1, text2) {
    let n = text1.length, m = text2.length;
    let dp = [];

    for (let i = 0; i <= n; i++) {
        dp.push(new Array(m + 1).fill(0));
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                dp[i][j] = 1 + dp[i + 1][j + 1];
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }

    return dp[0][0];
};
