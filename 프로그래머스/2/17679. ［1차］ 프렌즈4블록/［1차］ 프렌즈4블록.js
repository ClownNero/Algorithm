function solution(m, n, board) {
    board = board.map(v => v.split(''));
    
    while (true) {
        let founded = [];
        
        for (let i = 1; i < m; i++) {
            for(let j = 1; j < n; j++) {
                if (board[i][j] && board[i][j] === board[i][j - 1] && board[i][j] === board[i - 1][j] && board[i][j] === board[i - 1][j - 1]) {
                    founded.push([i, j]);
                }
            }
        }
        
        if (!founded.length) return [].concat(...board).filter(v => !v).length;
        
        founded.forEach(a => {
            board[a[0]][a[1]] = 0;
            board[a[0]][a[1]-1] = 0;
            board[a[0]-1][a[1]-1] = 0;
            board[a[0]-1][a[1]] = 0;
        });
        
        for (let i = m - 1; i > 0; i--){
            if(!board[i].some(v => !v)) continue;
            
            for (let j = 0; j < n; j++) {
                for (let k = i - 1; k >= 0 && !board[i][j]; k--){
                    if (board[k][j]) {
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}