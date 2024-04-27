function solution(skill, skill_trees) {
    const newArr = skill.split("");
    let count = 0;
    for(let i = 0; i < skill_trees.length; i++) {
        const str = skill_trees[i].split("").filter(word => newArr.includes(word)).join("");
        if(str === skill.substring(0,str.length)) {
            count++;
        }
    }
    return count;
}