import FactoryMethod from './creational-patterns/factoryMethod'
import TestFeature from './testFeature'
import AbstractFactoryExample from './creational-patterns/abstractFactory/index'
import BuilderPatternExample from './creational-patterns/builder/index'
class Main {

    static testFeature() {
        TestFeature.start()
    }

    static factoryMethodTest() {
        let fabric = new FactoryMethod()
        fabric.start()
        let fabric1 = new FactoryMethod(1)
        fabric1.start(1)
        let fabric2 = new FactoryMethod(2)
        fabric2.start(2)
    }

    /**
    * @param {("Win"|"Mac")} type
    */
    static abstractFactoryTest(type) {
        AbstractFactoryExample.start(type)
    }

    static builderPatternTest() {
        BuilderPatternExample.start()
    }

    static start() {

        //this.testFeature()
        //this.factoryMethodTest()
        //this.abstractFactoryTest("Mac")
        this.builderPatternTest()

    }
}

Main.start()