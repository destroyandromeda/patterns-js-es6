import AbstractPizzaBuilder from './AbstractPizzaBuilder';

class RussianHomePizzaBuilder extends AbstractPizzaBuilder {
    constructor() {
        super()
    }

    buildForm() {
        this.pizza.setForm('square')
    }
    buildSause() {
        this.pizza.setSause('ketchup+mayones')
    }
    buildTopping() {
        this.pizza.setTopping('cheese+sausage+onion')
    }
}
export default RussianHomePizzaBuilder