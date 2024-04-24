function solution(record) {
    const answer = [];
    const userInfo = {};
    
    for(let data of record ) {
        const [command, uid, nickName] = data.split(' ');
        if (command === "Enter") {
            userInfo[uid] = nickName;
            answer.push(`${uid}님이 들어왔습니다.`);
        }
        else if (command === "Leave") {
            answer.push(`${uid}님이 나갔습니다.`);
        }
        else if (command === "Change") {
            userInfo[uid] = nickName;
        }   
    }
    for(let i = 0; i < answer.length; i++){
        const uid = answer[i].split("님")[0];
        answer[i] = answer[i].replace(uid,userInfo[uid]);
    }
    return answer;
}