function solution(rows, columns, queries) {
    // 행렬 생성
    const matrix = Array.from({length: rows},(_,i)=> Array.from({length:columns},(_,j)=> i * columns + j + 1));
    
    // 결과 배열
    const answer = [];
    
    // 각 쿼리에 대해 처리
    for (const[x1, y1, x2, y2] of queries){
        // 시계 방향으로 회전
        const temp = matrix[x1-1][y1-1];
        let min = temp;
        
        // 왼쪽 열 회전
        for(let i = x1-1; i < x2-1; i++){
            matrix[i][y1-1] = matrix[i+1][y1-1];
            min = Math.min(min, matrix[i][y1-1]);
        }
        
        // 아래쪽 행 회전
        for(let i= y1-1; i < y2-1; i++){
            matrix[x2-1][i] = matrix[x2-1][i+1];
            min = Math.min(min, matrix[x2-1][i]);
        }
        
        // 오른쪽 열 회전
        for(let i = x2-1; i > x1-1; i--){
            matrix[i][y2-1] = matrix[i-1][y2-1];
            min = Math.min(min, matrix[i][y2-1]);
        }
        
        // 위쪽 행 회전
        for(let i = y2-1; i > y1-1; i--){
            matrix[x1-1][i] = matrix[x1-1][i-1];
            min = Math.min(min, matrix[x1-1][i]);
        }
        
        matrix[x1-1][y1] = temp;
        answer.push(min);
    }
    return answer;
}