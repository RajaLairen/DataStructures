//Given an array=[2,5,1,2,3,5,1,2,4]
//It should return 2
//[2,4,6,2,5,5,2,5,3,1,2,4]

function firstRecurringCharacterNst(number){
    let found=0;
    let prevFound=Infinity;
    let foundIndx;

    for(let i=0;i<number.length;i++){
        for(let j=i+1;j<number.length;j++){
            if(number[i]==number[j]){
                found=j;
                break;
            }
        }
        if(found<prevFound){
            foundIndx=i;
            prevFound=found;
        }
    }

    return number[foundIndx];
}


function firstRecurringCharacter(number){
    let numberWihoutRepet={}

    for(let i=0;i<number.length;i++){
        // if(!numberWihoutRepet[number[i]]){
        //     numberWihoutRepet[number[i]]=i;
        //    console.log(i);
        // }
        if(numberWihoutRepet[number[i]]==undefined){
            numberWihoutRepet[number[i]]=i;
        }
        else{
            return number[i];
        }
    }
}

console.log(firstRecurringCharacterNst([2,4,6,5,5,2,5,3,1,2,4]));