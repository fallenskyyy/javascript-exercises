const removeFromArray = function(arr, ...index) {
    let res = [];

    arr.forEach(element => {
        if(!index.includes(element)){
            res.push(element)
        }
    });

    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
