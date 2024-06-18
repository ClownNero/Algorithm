function solution(user_id, banned_id) {
    let bannedSets = [];

    function isMatch(user, banned) {
        if (user.length !== banned.length) return false;
        for (let i = 0; i < user.length; i++) {
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
