function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not equal";
    }
    return "Equal";
}

testStrictNotEqual(10);