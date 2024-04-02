function solution(s) {
    const arr = s.split(' ');
    let sum = 0;
    arr.map((val,idx)=>{
        if(val === 'Z') sum -=+arr[idx-1];
        else sum+=+val
    })
    return sum;
}