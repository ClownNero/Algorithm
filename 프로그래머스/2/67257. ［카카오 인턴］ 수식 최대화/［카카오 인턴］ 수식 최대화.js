function solution(expression) {
    const operations = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
        ['*', '+', '-'],
        ['*', '-', '+']
    ];

    let maxValue = 0;

    for (const op of operations) {
        const temp = expression.split(/(\D)/);
        const values = temp.filter((v, i) => i % 2 === 0).map(Number);
        const signs = temp.filter((v, i) => i % 2 !== 0);

        for (let i = 0; i < op.length; i++) {
            const target = op[i];
            while (signs.includes(target)) {
                const index = signs.indexOf(target);
                const result = operate(values[index], values[index + 1], target);
                values.splice(index, 2, result);
                signs.splice(index, 1);
            }
        }

        maxValue = Math.max(maxValue, Math.abs(values[0]));
    }

    return maxValue;
}

function operate(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
    }
}