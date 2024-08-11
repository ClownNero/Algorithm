function solution(stones, k) {
    let s = 1,e = 2000000000;
    while(s <= e) {
        const m = Math.floor((s + e) / 2);
        let count = 0;
        for(const stone of stones){
            if(count >= k) break;
            else if(stone - m <= 0) count++;
            else count = 0;
        }
        if(count >= k) e = m - 1;
        else s = m + 1;
    }
    return s;
}