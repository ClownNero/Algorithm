function solution(players, callings) {
    const playerMap = new Map();
    
    // 선수와 인덱스를 매핑ㅈ
    players.forEach((player, index) => {
        playerMap.set(player, index);
    });

    callings.forEach(calling => {
        const index = playerMap.get(calling);
        if (index > 0) { // 맨 앞 선수는 교체할 수 없음
            const frontPlayer = players[index - 1];

            // 선수들 위치 스왑
            players[index] = frontPlayer;
            players[index - 1] = calling;

            // 맵도 업데이트
            playerMap.set(calling, index - 1);
            playerMap.set(frontPlayer, index);
        }
    });

    return players;
}