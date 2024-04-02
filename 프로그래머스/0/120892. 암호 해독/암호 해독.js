function solution(cipher, code) {
    return [...cipher].filter((val,idx)=> idx % code === code-1).join('');
    
}