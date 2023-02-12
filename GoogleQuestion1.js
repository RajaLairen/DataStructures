//Given an array=[2,5,1,2,3,5,1,2,4]
//It should return 2

//Given an array=[2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array=[2,3,4,5]
//It should return undefined



// [1,1,2,3,1,4,2,2,5]

function repeatedCheck(array){
    let count=0;
    let prevCount=0;
    let greatIndx=0;

    for(let i=0;i<array.length;i++){
        count=0;
        for(let j=0;j<array.length;j++){
            if(array[i]==array[j]){
                count++;
            }
        }

        if(count>=prevCount){
            greatIndx=i;
            prevCount=count;
        }
    }
    

    if(!containRepeat(array)){
        return undefined;
    }
    else{
        return array[greatIndx];
    }
}

function containRepeat(array){
    let count=0;
    for(let i=0;i<array.length;i++){
        count=0;
        for(let j=0;j<array.length;j++){
            if(array[i]==array[j]){
                count++;
            }
        }

        if(count>1){
            return true;
        }
    }
    return false;
}

console.log(repeatedCheck([1,1,2,3,1,4,2,2,5]));


/*
function CheckRepeat(number){
    const checkArray=[];
    let count=0;
    let prevCount=0;
    let repeatedIndx=undefined;

    for(let i=0;i<number.length;i++){
        count=0;
        if(!checkRepeatedElement(checkArray,number[i])){
            checkArray.push(number[i]);
            for(let j=0;j<number.length;j++){ 
                if(number[i]==number[j]){
                    count++;
                }
            }
            if(count>=prevCount){
                repeatedIndx=i;
                prevCount=count;
            }
        }
    }
    return number[repeatedIndx];
}

function checkRepeatedElement(arry,number){
    for(let i=0;i<arry.length;i++){
        if(number==arry[i]){
            return true;
        }
    }
    return false;
}

console.log(CheckRepeat([2,3,1,1,2,5,1,2,1,4]));

*/

function MaxRepeated(array){
    const singleArray=removeRepeatedElement(array);
    let count=0;
    let prevCount=0;
    let greatIndx;

    for(let i=0;i<singleArray.length;i++){
        count=0;
        for(let j=0;j<array.length;j++){
            if(singleArray[i]==array[j]){
                count++;
            }
        }

        if(count>prevCount){
            greatIndx=i;
            prevCount=count;
        }
    }
    return singleArray[greatIndx];
}

function removeRepeatedElement(array){
    const newArray=[];
    let isRepeated=true;

    for(let i=0;i<array.length;i++){
        for(let j=0;j<=newArray.length;j++){
            if(array[i]==newArray[j]){
                isRepeated=true;
                break;
            }
            else{
                isRepeated=false;
            }
        }
        if(!isRepeated){
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log(MaxRepeated([2,3,1,1,2,5,1,2,1,4,4]));