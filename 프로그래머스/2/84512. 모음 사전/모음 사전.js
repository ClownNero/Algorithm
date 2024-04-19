let idx = 0;
const result = {};
const vowels = [..."AEIOU"];

function solution(word) {
    dfs("",0);
    return result[word];
}

const dfs = (word, len) => {
    if(len > 5) return;
    result[word] = idx++;
    vowels.forEach((vowel) => {
        dfs(word + vowel, len + 1);
    });
};