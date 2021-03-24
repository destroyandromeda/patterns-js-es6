import Kitchen from './Kitchen';
import HawaiiPizzaBuilder from './pizzasBuilders/HawaiiPizzaBuilder';
import RussianHomePizzaBuilder from './pizzasBuilders/RussianHomePizzaBuilder';
import VeganPizzaBuilder from './pizzasBuilders/VeganPizzaBuilder';

class BuilderPatternExample {
    static start() {

        let builders = [
            new VeganPizzaBuilder(),
            new HawaiiPizzaBuilder(),
            new RussianHomePizzaBuilder(),
        ]

        builders.map(builder => {
            let kitchen = new Kitchen(builder)
            kitchen.cook()
        })
    }
}

export default BuilderPatternExample