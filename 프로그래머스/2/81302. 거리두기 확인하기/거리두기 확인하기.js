function solution(places) {
    const answer = [];
    const dx = [0,0,-1,1];
    const dy = [1,-1,0,0];
    const dfs = (x, y, place)=>{
        for(let i = 0; i<4; i++){
            let nx = x + dx[i];
            let ny = y + dy[i];
            
            if(nx >= 0 && nx < 5 && ny >= 0 && ny < 5){
                if(place[nx][ny] === 'P'){
                    return false;
                } else if(place[nx][ny] ==='O'){
                    for(let j = 0; j < 4; j++){
                        const nX = nx + dx[j];
                        const nY = ny + dy[j];
                        
                        if( nX >= 0 && nX <5 && nY >= 0 && nY < 5){
                            if(nX !== x || nY != y){
                                if(place[nX][nY] === 'P') return false;
                            }
                        }
                    }
                }
            }
        }
        return true;
    }
    
    for(let place of places){
        let isSafe = true;
        
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                if(place[i][j] === "P"){
                    if(!dfs(i,j,place)){
                        isSafe = false;
                        break;
                    }
                }
            }
            if(!isSafe) break;
        }
        
        answer.push(isSafe ? 1 : 0);
    }
    
    return answer;
}