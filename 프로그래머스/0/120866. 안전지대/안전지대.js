function solution(board) {
    const len = board.length;
    let answer = 0;
    
    const dangerArea = [
        [-1,0],[1,0],[0,1],[0,-1],[-1,1],[1,1],[1,-1],[-1,-1]
    ];
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(board[i][j] === 1){
                dangerArea.map((v)=>{
                    let [x, y] = v;
                    [x, y] = [x + i, y + j];
                    if (
                    x >= 0 &&
                    x < len &&
                    y >= 0 &&
                    y < len &&
                    board[x][y] === 0
                    )
                        board[x][y] = 2;
                });
            }
        }
    }
    board.map(v1 => v1.map(v2 => v2 === 0 ? answer++: 0));
    return answer;
}