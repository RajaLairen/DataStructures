//[1,2,1,3,1,2,4,5]

function removeRepeatElement(array){
    let newArray=[];
    let isRepeated=false;

    for(let i=0;i<array.length;i++){
        for(let j=0;j<newArray.length;j++){
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

console.log(removeRepeatElement([1,2,1,3,2,4,5]));