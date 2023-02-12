var name="Cage";
var nameRev=[];

var lastIndex=name.length-1;
for(let i=0;i<name.length;i++){
    nameRev[i]=name[lastIndex];
    lastIndex--;
}

console.log(nameRev.join(""));