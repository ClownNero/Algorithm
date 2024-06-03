function solution(begin, target, words) {
    let answer = 0;
    let count = 0;
    let visited = Array.from({length: words.length}, () => 0);
    function dfs(begin, target, count){
        if(begin === target){
            answer = count;
            return;
        }
        
        for(let i = 0; i < words.length; i++){
            if(visited[i] === 1) continue;
            
            let sameCount = 0;
            
            for(let j =0; j < begin.length; j++){
                if(begin.charAt(j) === words[i].charAt(j)){
                    sameCount++;
                }
            }
            
            if(sameCount === begin.length-1){
                visited[i] = 1;
                dfs(words[i], target, count+1);
                visited[i] = 0;
            }
        }
    }
    
    dfs(begin, target, count);
    return answer;
}