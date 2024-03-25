function solution(my_string, overwrite_string, s) {
    let answer = [...my_string];
    answer.splice(s, overwrite_string.length, overwrite_string);
    console.log(answer);
    return answer.join('');
}