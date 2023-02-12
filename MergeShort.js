// //[0,3,8]   [1,4,6]
// //[0,1,3,4,6,8]

// function MergeShort(arr1,arr2){
//     resultArray=[];
//     let indx=0;

//     for(let i=0;i<arr1.length;i++){
//         for(let j=indx;j<arr2.length;j++){
//             if(arr1[i]>=arr2[j]){
//                 resultArray.push(arr2[j]);
//                 indx++;
//             }
//             else{
//                 break;
//             }
//         }
//         resultArray.push(arr1[i]);
//     }
//     return resultArray;
// }

// console.log(MergeShort([0,3,8],[1,4,6]));


//Another Solution

function MergeShort1(array1,array2){
    const mergeShortArray=[];
    let array1Item=array1[0];
    let array2Item=array2[0];
    let i=1;
    let j=1;

    if(array1.length==0){
        return array2;
    }

    if(array2.length==0){
        return array1;
    }

    while(array1Item||array2Item){
        if(!array2Item || array1Item<array2Item){
            mergeShortArray.push(array1Item);
            array1Item=array1[i];
            i++;
        }
        else{
            mergeShortArray.push(array2Item);
            array2Item=array2[j];
            j++
        }
    }
    return mergeShortArray;
}

console.log(MergeShort1([0,3,8],[1,4,6]));