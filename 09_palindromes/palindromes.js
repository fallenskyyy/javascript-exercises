const palindromes = function (string) {
    str = string.toLowerCase()
    str = str.replaceAll(".", "")
    str = str.split(" ").join("")
    reverse = str.split(" ").reverse().join("")
    if (str === reverse){
        return true
    }
    else{
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
