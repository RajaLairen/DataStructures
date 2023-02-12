class MyArray{
    constructor(){
        this.length=0;
        this.data={};
    }

    getData(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length]=item;
        this.length++;
    }

    pop(){
        delete this.data[this.length-1];
        this.length--;
    }

    delete(index){
        for(let i=index;i<this.length;i++){
            this.data[i]=this.data[i+1];
        }
        
        this.pop();
    }
}

const obj1=new MyArray();
obj1.push(6);
obj1.push(8);
obj1.push(7);
obj1.push(4);
obj1.push(3);
obj1.push(10);
console.log(obj1);
obj1.delete(4);
console.log(obj1);