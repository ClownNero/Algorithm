const solution = (brown, yellow) => {
    const answer = [];
    for (let x = 3; x <= (brown+yellow)/x; x++) {
        let y = Math.floor((brown+yellow)/x);
        if( (x-2) * (y-2) === yellow) {
            answer.push(y,x);
            break;
        }
    }
 
    return answer; 
}