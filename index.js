// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if(someValue > 42){
        return someValue -42
    }else{
        return 42-someValue
    }
}

function distanceFromHqInFeet(someValue){
    if(someValue > 42){
        return (someValue-42)*264
    }else{
        return (42-someValue)*264
    }
}

function distanceTravelledInFeet(value1, value2){
    if(value1 > value2){
        return (value1-value2)*264
    }else{
        return (value2-value1)*264
    }
}

function calculatesFarePrice(value1, value2){
    let totalFeet;
    if(value1 > value2){
        totalFeet = (value1-value2)*264
    }else{
        totalFeet = (value2-value1)*264
    }
    let totalCost;
    if(totalFeet <= 400){

        return totalCost = 0

    }else if (totalFeet > 400 && totalFeet <= 2000){

        return totalCost = (totalFeet-400) * 0.02;

    }else if (totalFeet>2000 && totalFeet<=2500){

        return totalCost = 25;

    }else if (totalFeet> 2500){
        return "cannot travel that far"
    }
}