function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or under";
}

function testGreaterOrEqual(val) {
    if (val >= 20) return "20 or Over";

    if (val >= 10) return "10 or Over";

    return "Less than 10";
}

function testLessThan(val) {
    if (val < 25) return "Under 25";

    if (val < 55) return "Under 55";

    return "55 or Over";
}

function testLessOrEqual(val) {
    if (val <= 12) return "Smaller Than or Equal to 12";

    if (val <= 24) return "Smaller Than or Equal to 24";

    return "More Than 24";
}

function testLogicalAnd(val) {

    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    return "No";
}

testLogicalAnd(10);