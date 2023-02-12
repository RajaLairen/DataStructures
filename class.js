var obj1={
    func1:function(){
        console.log("Hi");
    }
}

class A{
    constructor(){
        console.log(this);
    }

    display(){
        console.log(this);
    }
}

class B extends A{
    constructor(){
        super();
        console.log(this);
    }
}

var obj2=new A();
var obj3=new B();