const hammingWeight = function(n) {
    const newN = n.toString(2);
    let count = 0;
    for (const char of newN) {
        if (char === '1') {
            count++;
        }
    }
    return count;
}

const result = hammingWeight('00000000000000000000000000001011');
console.log(result);