import PrototypeExample from './creational-patterns/prototype/index'
import SingletonExample from './creational-patterns/singleton/index'
import BuilderPatternExample from './creational-patterns/builder/index'
import FactoryMethodExample from './creational-patterns/FactoryMethod/index'
import AbstractFactoryExample from './creational-patterns/abstractFactory/index'
class Main {

    static factoryMethodExamplePatternTest() {
        let fabric = new FactoryMethodExample()
        fabric.start()
        let fabric1 = new FactoryMethodExample(1)
        fabric1.start(1)
        let fabric2 = new FactoryMethodExample(2)
        fabric2.start(2)
    }

    /**
    * @param {("Win"|"Mac")} type
    */
    static abstractFactoryPatternTest(type) {
        AbstractFactoryExample.start(type)
    }

    static builderPatternTest() {
        BuilderPatternExample.start()
    }

    static prototypePatternTest() {
        let prototype = new PrototypeExample()
        prototype.init()
        prototype.start()
    }

    static singletonPatternTest() {
        SingletonExample.start()
    }

    static creationalPatterns() {

        // this.factoryMethodExamplePatternTest()
        // this.abstractFactoryPatternTest("Mac")
        // this.builderPatternTest()
        // this.prototypePatternTest()
        this.singletonPatternTest()

    }
}

Main.creationalPatterns()