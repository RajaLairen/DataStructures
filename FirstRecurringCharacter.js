//Given an array=[2,5,1,2,3,5,1,2,4]
//It should return 2

//Given an array=[2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array=[2,3,4,5]
//It should return undefined

function firstRecurringCharacter(value){
    for(let i=0;i<value.length;i++){
        for(let j=i+1;j<value.length;j++){
            if(value[i]===value[j]){
                return value[i];
            }
        }
    }
    return undefined;
}// O(n^2)

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));


