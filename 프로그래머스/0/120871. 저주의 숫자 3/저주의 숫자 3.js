function solution(n) {
    const dp = Array(100).fill(0);
    dp[1] =1; dp[2]=2;
    for(let i =3; i<=100; i++){
        dp[i] = dp[i-1] + 1;
        while(dp[i]%3 === 0 || String(dp[i]).includes('3')){
            dp[i]++;
        }
    }
    return dp[n];
}