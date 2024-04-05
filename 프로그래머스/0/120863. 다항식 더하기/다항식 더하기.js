function solution(polynomial) {
    let count = 0;
    let num =0;
    let answer ='';
    const array = polynomial.split(" + ");
    for(let i of array){
         if(i.includes('x')){
            const num = i.split('x');
            if(num[0] === '') count++;
            else count +=+num[0];
        } else num+=+i;
    }
    if(count > 1 && num > 0 ) answer = `${count}x + ${num}`;
    else if(count ===1 && num > 0) answer = `x + ${num}`;
    else if(count > 1 && num === 0) answer = `${count}x`;
    else if(count === 1 && num === 0) answer = `x`;
    else if(count === 0 && num > 0) answer = `${num}`;
    return answer;
}