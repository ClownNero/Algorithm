function solution(user_id, banned_id) {
    let bannedSets = [];

    function isMatch(user, banned) {
        // 문자열 길이 다르단 경우 false
        if (user.length !== banned.length) return false;
        for (let i = 0; i < user.length; i++) {
            // banned 문자열에 *가 아닌 문자가 있는데 user 문자열에 해당 문자가 없는 경우 false
            if (banned[i] !== '*' && user[i] !== banned[i]) return false;
        }
        return true;
    }

    function findBannedSets(index, currentSet) {
        if (index === banned_id.length) {
            let sortedSet = [...currentSet].sort();
            let setStr = sortedSet.join();
            if (!bannedSets.includes(setStr)) {
                bannedSets.push(setStr);
            }
            return;
        }
        
        for (let user of user_id) {
            if (!currentSet.has(user) && isMatch(user, banned_id[index])) {
                currentSet.add(user);
                findBannedSets(index + 1, currentSet);
                currentSet.delete(user);
            }
        }
    }

    findBannedSets(0, new Set());
    return bannedSets.length;
}
