const solution = (sizes) => {
    const len = sizes.length;
    const width = [];
    const height = [];
    
    for(let i = 0; i < len; i++){
        const max = Math.max(sizes[i][0], sizes[i][1]);
        const min = Math.min(sizes[i][0], sizes[i][1]);
        width.push(max);
        height.push(min);
    }
    
    return Math.max(...width) * Math.max(...height);
    
}