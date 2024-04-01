function solution(my_string) {
    const vowels = ['a','e','i','o','u'];
    const arr =my_string.split('');
    arr.map((val,idx)=> {
        if(vowels.includes(val)) arr.splice(idx,1,'');
    }
    )
    return arr.join('');
}