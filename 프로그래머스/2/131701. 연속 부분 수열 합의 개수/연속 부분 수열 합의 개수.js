function solution(elements) {
    const set = new Set();
    const len = elements.length;
    const arr = [...elements, ...elements.slice(0,len-1)];
    
    for(let i =1; i<=len; i++){
        for(let j =0; j< len; j++){
            const sum = arr.slice(j,j+i).reduce((a,c)=>a+c,0);
            set.add(sum);
        }
    }
    return set.size;
}