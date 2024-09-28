function solution(keymap, targets) {
    const key = new Map();
    keymap.forEach((str)=>{
        for(let i =0; i< str.length; i++){
            if(!key.has(str[i])){
                key.set(str[i],i+1);
            } else {
                if(key.get(str[i]) > i+1) {
                    key.set(str[i], i+1)
                }
            }
        }
    });
    const answer = [];
    targets.forEach((str)=>{
        let sum = 0;
        for(let i = 0; i < str.length; i++){
            if(key.get(str[i]) > 0){
                sum += key.get(str[i]);
            } else {
                sum = -1;
                break;
            }
        }
        answer.push(sum);
    });
    return answer;
}