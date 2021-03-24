import AbstractFactory from './AbstractFactory'
import MacButton from '../buttons/MacButton'
import MacCheckbox from '../checkboxes/MacCheckbox'

class MacFactory extends AbstractFactory {
    constructor() {
        super()
    }
    createButton() {
        return new MacButton()
    }
    createCheckbox() {
        return new MacCheckbox()
    }
}

export default MacFactory