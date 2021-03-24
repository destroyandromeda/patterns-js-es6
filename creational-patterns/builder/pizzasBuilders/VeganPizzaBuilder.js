import AbstractPizzaBuilder from './AbstractPizzaBuilder';

class VeganPizzaBuilder extends AbstractPizzaBuilder {
    constructor() {
        super()
    }

    buildForm() {
        this.pizza.setForm('circle')
    }
    buildSause() {
        this.pizza.setSause('oregano+basil+tomatoes')
    }
    buildTopping() {
        this.pizza.setTopping('vegetable+mushrooms+soya')
    }

}
export default VeganPizzaBuilder