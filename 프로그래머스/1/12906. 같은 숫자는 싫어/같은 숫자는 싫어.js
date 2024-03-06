const solution = (arr) => {
    // 간단한 filter함수로 푸는 법
    return arr.filter((val, idx) => val !== arr[idx+1]);
    // Stack구조를 만들어 푸는 법
    /*
    const stack = [];
    for(const val of arr) {
        if(stack.length === 0 || stack[stack.length -1] !== val){
        stack.push(val);
        }
    }
    return stack;
    */
}