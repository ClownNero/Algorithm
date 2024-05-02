function solution(arr) {
    const answer = [0,0];
    const len = arr.length;
    
    function quad(size, ans, start) {
        const [x, y] = start;
        const first = arr[x][y];
        if (size === 1) {
            first === 0 ? ans[0]++: ans[1]++;
            return;
        }
        const half = size / 2;
        let flag = true;
        
        for(let i = x; i < x+size; i++){
            for(let j = y; j < y+size; j++){
                if(first !== arr[i][j]) {
                    flag = false;
                    break;
                }
            }
            if (!flag) break;
        }
        
        if(flag) {
            first === 0 ? ans[0]++ : ans[1]++;
            return;
        }
        
        quad(half, ans, [x,y]);
        quad(half, ans, [x,y+half]);
        quad(half, ans, [x+half,y]);
        quad(half, ans, [x+half,y+half]);
        return;
    }
    
    quad(len, answer, [0,0]);
    return answer;
}