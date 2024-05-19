function solution(maps) {
    const answer = [];
    const dx = [1,-1,0,0];
    const dy = [0,0,1,-1];
    const visited = Array.from({length:maps.length}, () => Array(maps[0].length).fill(false));
    
    const bfs = (x,y) => {
        let result = 0;
        const queue = [[x,y]];
        result += +maps[x][y];
        visited[x][y] = true;
        
        while (queue.length > 0){
            const [r,c] = queue.shift();
            for(let i = 0; i < 4; i++){
                const nr = r + dx[i];
                const nc = c + dy[i];
                if(nr >= 0 && nc >= 0 && nr < maps.length && nc < maps[0].length && !visited[nr][nc] && maps[nr][nc] !== "X"){
                    visited[nr][nc] = true;
                    result += +maps[nr][nc];
                    queue.push([nr,nc]);
                }
            }
        }
        answer.push(result);
    };
    
    for(let i = 0; i < maps.length; i++){
        for(let j =0; j< maps[0].length; j++){
            if(!visited[i][j] && maps[i][j] !=="X") bfs(i,j);
        }
    }
    
    if(answer.length === 0) return [-1];
    
    return answer.sort((a,b)=>a-b);
}