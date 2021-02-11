module.exports = function reverse (n) {
    let positiveNum = (n > 0) ? n : -n;
    let strFromNumber = String(positiveNum);
    let reverseArr = strFromNumber.split("").reverse().join("");
    return Number(reverseArr);
}
