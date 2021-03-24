class Foo{
    constructor(){
        this.param1 = 1
        this.param2 = 2
    }

    log1(){
        console.log(1)
    }
    log2(){
        console.log(2)
    }

    logAll(){
        this.log1()
        this.log2()
    }
}

class Bar extends Foo{
    constructor(){
        super()
        this.param2 = 3
    }
    log1(){
        console.log(1)
    }
    log2(){
        console.log(3)
    }


}


class TestFeature{
    static start(){
        let foo = new Foo()
        let bar = new Bar() 
        
        console.log(foo);
        console.log(bar);
        bar.logAll()
    }
}
export default TestFeature