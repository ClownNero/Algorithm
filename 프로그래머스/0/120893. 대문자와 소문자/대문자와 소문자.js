function solution(my_string) {
    return [...my_string].map(val => val === val.toUpperCase()? val.toLowerCase() : val.toUpperCase()).join('');
}