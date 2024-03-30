function solution(emergency) {
    let answer = Array(emergency.length).fill(0);
    let sortArr = [...emergency].sort((a,b)=> b-a);
    console.log(emergency);
    console.log(sortArr);
    for(let i =0; i<emergency.length; i++){
        for(let j =0; j<emergency.length; j++){
            if(sortArr[i] === emergency[j]) answer[j]=i+1;
        }
    }
    return answer;
}