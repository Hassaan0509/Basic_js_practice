function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

checkEqual(5, 5);

function checkSign(num) {
    return num > 0 ? "positive"
        : num < 0 ? "negative"
            : "zero";
}

checkSign(22)