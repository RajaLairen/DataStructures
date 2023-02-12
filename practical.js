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