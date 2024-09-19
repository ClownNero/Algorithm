function solution(wallpaper) {
    let minRow = Infinity;
    let maxRow = -Infinity;
    let minCol = Infinity;
    let maxCol = -Infinity;

    // wallpaper 배열을 탐색하여 파일의 경계를 찾는다.
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === '#') {
                if (i < minRow) minRow = i;  // 가장 위쪽
                if (i > maxRow) maxRow = i;  // 가장 아래쪽
                if (j < minCol) minCol = j;  // 가장 왼쪽
                if (j > maxCol) maxCol = j;  // 가장 오른쪽
            }
        }
    }

    // 최소 드래그 영역은 (minRow, minCol)에서 (maxRow + 1, maxCol + 1)까지
    return [minRow, minCol, maxRow + 1, maxCol + 1];
}