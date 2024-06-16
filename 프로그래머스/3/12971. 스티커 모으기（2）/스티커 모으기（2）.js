function solution(sticker) {
    const len = sticker.length;
    
    if(len === 1) return sticker[0];
    
    const dp1 = [sticker[0],sticker[0],...Array(len-2).fill(0)];
    const dp2 = [0,sticker[1],...Array(len-2).fill(0)];
    
    for(let i = 2; i < len; i++){
        dp1[i] = Math.max(dp1[i-1], dp1[i-2] + sticker[i]);
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + sticker[i]);
    }
    

    return Math.max(dp1[len-2],dp2[len-1]);
}