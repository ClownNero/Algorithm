function solution(n, works) {
    if (works.reduce((a,c) => a+c) <=n) return 0;
    const len = works.length;
    let sorted = works.sort((a,b) => a-b);
    
    while(n) {
        const max = sorted[len - 1];
        
        for(let i = len - 1; i >= 0; i--){
            if(sorted[i] >= max){
                sorted[i]--;
                n--;
            }
            if(!n) break;
        }
    }
    
    return sorted.reduce((a,c)=> a + Math.pow(c,2),0);
}