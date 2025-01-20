const sumAll = function(num1, num2) {
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"
    }

    if(num1 < 0 || num2 < 0 ){
        return "ERROR"
    }

    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return "ERROR"
    }
    if(num1 < num2){
        for(let i = num1+1;i < num2+1; i++){
            num1 += i
    
        }
        return num1
    }
    else{
        for(let i = num2+1;i < num1+1; i++){
            num2 += i
    
        }
        return num2
    }
};

// Do not edit below this line
module.exports = sumAll;
