function solution(record) {
    let answer = [];
    const userInfo = new Map();

    record.forEach(entry => {
        let [command, uid, nick] = entry.split(' ');
        if (command === 'Enter' || command === 'Change') userInfo.set(uid, nick);
    })

    record.forEach(entry => {
        let [command, uid] = entry.split(' ');
        if (command === 'Enter') answer.push(`${userInfo.get(uid)}님이 들어왔습니다.`);
        if (command === 'Leave') answer.push(`${userInfo.get(uid)}님이 나갔습니다.`);
    })

    return answer;
}