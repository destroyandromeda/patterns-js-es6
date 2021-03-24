import AbstractFactory from './factories/AbstractFactory'
import WinFactory from './factories/WinFactory'
import MacFactory from './factories/MacFactory'

class TestAbstractFactory {
    constructor(factory) {
        this.factory = factory
        this.button
        this.checkbox
    }
    createUI() {
        this.button = this.factory.createButton()
        this.checkbox = this.factory.createCheckbox()
    }
    render() {
        this.button.render()
        this.checkbox.render()
    }
}

class AbstractFactoryExample {
    /**
    * @param {("Win"|"Mac")} type
    */
    static start(type = "Win") {
        let factory
        if (type === "Win") {
            factory = new WinFactory()
        } else if (type === "Mac") {
            factory = new MacFactory()
        } else {
            factory = new AbstractFactory()
        }

        let app = new TestAbstractFactory(factory)

        app.createUI()
        app.render()
    }
}

export default AbstractFactoryExample