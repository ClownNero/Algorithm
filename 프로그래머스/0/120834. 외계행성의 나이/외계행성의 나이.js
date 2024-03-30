function solution(age) {
    let answer = '';
    const a = ['a','b','c','d','e','f','g','h','i','j'];
    const ageStr = age.toString();
    
    for(let i =0 ; i< ageStr.length; i++){
        answer += a[ageStr[i]];
    }
    return answer;
}