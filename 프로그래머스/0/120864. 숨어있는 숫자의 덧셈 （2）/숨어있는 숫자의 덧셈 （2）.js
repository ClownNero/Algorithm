function solution(my_string) {
    return my_string.split(/[a-zA-Z]/g).reduce((a,c)=>+a + +c,0);
}