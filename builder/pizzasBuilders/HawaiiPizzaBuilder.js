import AbstractPizzaBuilder from './AbstractPizzaBuilder';

class HawaiiPizzaBuilder extends AbstractPizzaBuilder {
    constructor() {
        super()
    }

    buildForm() {
        this.pizza.setForm('circle')
    }
    buildSause() {
        this.pizza.setSause('standart')
    }
    buildTopping() {
        this.pizza.setTopping('ham+pineapple')
    }
}
export default HawaiiPizzaBuilder