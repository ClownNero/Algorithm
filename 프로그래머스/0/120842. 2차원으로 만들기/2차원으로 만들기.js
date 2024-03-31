function solution(num_list, n) {
    let answer = [];
    for(let i =0; i<num_list.length;){
        let array = [];
        for(let j =0; j<n; j++){
            array.push(num_list[i+j]);
        }
        answer.push(array);
        i+=n;
    }
    return answer;
}