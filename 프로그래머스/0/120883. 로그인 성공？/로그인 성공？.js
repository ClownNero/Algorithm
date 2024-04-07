function solution(id_pw, db) {
    const arr = db.filter(([id,pw])=> id === id_pw[0]);
    return arr.length === 0 ? "fail" : arr[0][1] === id_pw[1] ? "login": "wrong pw";
}