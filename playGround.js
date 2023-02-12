//Array= [1,2,3,4,5,6,7] if the array element pair give 11 return true else false


function Check(array,val){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
            if(array[i]+array[j]==val){
                return true;
            }
        }
    }
    return false;
}

//console.log(Check([1,2,3,4,5,6,7],11));


//Better way

function pairCheck(array,val){
let match=new Set();

for(let i=0;i<array.length;i++){
    if(match.has(array[i])){
        return true;
    }

    match.add(val-array[i]);
}
 return false;
}

console.log(pairCheck([1,2,3,4,5,6,7],11));