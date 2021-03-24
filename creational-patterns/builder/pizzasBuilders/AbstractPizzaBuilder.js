import Pizza from '../Pizza'

class AbstractPizzaBuilder {
    constructor() {
        if (this.constructor === AbstractPizzaBuilder) {
            throw new TypeError("Can not construct AbstractPizzaBuilder class.");
        }
        this.pizza = new Pizza()
    }
    // An AbstractPizzaBuilder methods.
    clear() {
        this.pizza = new Pizza()
    }
    buildForm() {
        throw new TypeError("Do not call AbstractClass method buildForm from child.");
    }
    buildSause() {
        throw new TypeError("Do not call AbstractClass method buildSause from child.");
    }
    buildTopping() {
        throw new TypeError("Do not call AbstractClass method buildTopping from child.");
    }
    getResult() {
        let pizza = this.pizza
        this.clear()
        console.log('pizza', pizza)
        return pizza
    }
}

export default AbstractPizzaBuilder