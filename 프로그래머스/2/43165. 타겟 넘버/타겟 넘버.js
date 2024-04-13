function solution(numbers, target) {
    let answer = 0;
    const len = numbers.length;
    const dfs = (idx, sum) => {
        if(idx === len) {
            if(sum === target) answer++;
            return;
        }
        dfs(idx+1, sum + numbers[idx]);
        dfs(idx+1, sum - numbers[idx]);
    };
    
    dfs(0,0);
    
    return answer;
}