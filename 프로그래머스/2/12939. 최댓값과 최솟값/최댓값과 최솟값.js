const solution = (s) => {
    const answer = s.split(' ');
    
    
    return Math.min(...answer) + ' ' + Math.max(...answer);
}