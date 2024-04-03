function solution(my_string, num1, num2) {
    const array = [...my_string];
    const a = array[num1];
    const b = array[num2];
    array[num1] = b; array[num2] = a;
    return array.join('');
}