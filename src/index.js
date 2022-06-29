module.exports = function reverse(n) {
    const string = Math.abs(n).toString();
    const array = +string.split("").reverse().join("");
    return array;
};
