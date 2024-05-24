function solution(n) {
    const col = new Array(n).fill(0);
    let answer = 0;
    function check(level){
        for(let i =0; i<level; i++){
            if(col[i] === col[level] || Math.abs(col[level]-col[i]) === level - i){
                return false;
            }
        }
        return true;
    }
    
    function Queen(start){
        if(start === n ){
            answer++;
        }
        else {
            for(let i = 0; i < n; i++){
                col[start] = i;
                if(check(start)){
                    Queen(start+1);
                }
            }
        }
    }
    
    Queen(0);
    return answer;
}