const solution = (triangle) => {
    const len = triangle.length;
    for(let i =1; i < len; i++){
        for(let j = 0; j < i+1; j++){
             triangle[i][j] += Math.max(triangle[i - 1][j - 1] || 0, triangle[i - 1][j] || 0);
        }
    }
    return Math.max(...triangle[len-1]);
}