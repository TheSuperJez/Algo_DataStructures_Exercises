// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function getMaximumFromMap(map) {
    let maximum = 0;
    Object.keys(map).forEach((char) => maximum = map[char] > maximum ? char : maximum);
    return maximum;
}

function maxChar(str) {
    const charMap = {};
    str.split('').forEach((singleChar) => {
        charMap[singleChar] = !charMap[singleChar] ? 1 : ++charMap[singleChar];
    });
    return getMaximumFromMap(charMap);
}

module.exports = maxChar;
