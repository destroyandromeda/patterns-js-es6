import FactoryMethod from './factoryMethod'
import TestFeature from './testFeature'

class Main{

    static testFeature(){
        TestFeature.start()
    }

    static fabricMethodTest(){
        let fabric = new FactoryMethod()
        console.log(fabric);
        fabric.log()
    }

    static start(){

        // this.testFeature()
        this.fabricMethodTest()
    }
}

Main.start()