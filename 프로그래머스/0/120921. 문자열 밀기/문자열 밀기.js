const solution = (A, B) => {
    const len = A.length;
    let count = 0;
    const arr = [...A];
    const answer = [...B];
    for(let i= len-1; i>0; i--){
        if(arr.join('') === answer.join('')) return count;
        const back = arr.pop();
        arr.unshift(back);
        count++;
    }
    if(arr.join('') === answer.join('')) return count;
    return -1;
}