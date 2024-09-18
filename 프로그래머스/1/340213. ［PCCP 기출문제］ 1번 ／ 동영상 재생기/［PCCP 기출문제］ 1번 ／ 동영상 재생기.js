function solution(video_len, pos, op_start, op_end, commands) {
    // 시간을 초로 변환하는 함수
    const timeToSeconds = (time) => {
        const [m,s] = time.split(":").map(Number);
        return m * 60 + s;
    };
    
    // 초를 형식 mm:ss로 변환하는 함수
    const secondsToTime = (totalSeconds) => {
        const m = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const s = String(totalSeconds % 60).padStart(2, '0');
        return `${m}:${s}`;
    };
    
    // 주어진 시간들 초로 변환
    const video_end_s = timeToSeconds(video_len);
    let cur_s = timeToSeconds(pos);
    const op_start_s = timeToSeconds(op_start);
    const op_end_s = timeToSeconds(op_end);
    
    // 오프닝 구간 처리
    if (cur_s >= op_start_s && cur_s <= op_end_s){
        cur_s = op_end_s; // 오프닝 끝으로 이동
    }
    
    // 명령어별 현재 위치 조정
    commands.forEach((command) => {
        if (command === "prev") {
            cur_s = Math.max(0, cur_s - 10); // 10초 전으로 이동
        } else if (command === "next") {
            cur_s = Math.min(video_end_s, cur_s + 10); // 10초 후로 이동
        }
        // 오프닝 구간 처리
        if (cur_s >= op_start_s && cur_s <= op_end_s){
            cur_s = op_end_s; // 오프닝 끝으로 이동
        }
        
    });
    
    return secondsToTime(cur_s); // 최종 위치를 mm:ss 형식으로 변환
}