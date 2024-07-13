function solution(gems) {
    const map = new Map();
    const numTypes = new Set(gems).size;
    let start = 0;
    let end = 0;
    let minStart = 0;
    let minLength = Infinity;

    while (end < gems.length) {
        map.set(gems[end], (map.get(gems[end]) || 0) + 1);

        while (map.size === numTypes) {
            const length = end - start + 1;
            if (length < minLength) {
                minLength = length;
                minStart = start;
            }

            map.set(gems[start], map.get(gems[start]) - 1);
            if (map.get(gems[start]) === 0) {
                map.delete(gems[start]);
            }
            start++;
        }

        end++;
    }

    return [minStart + 1, minStart + minLength];
}
