import AbstractFactory from './AbstractFactory'
import WinButton from '../buttons/WinButton'
import WinCheckbox from '../checkboxes/WinCheckbox'

class WinFactory extends AbstractFactory {
    constructor() {
        super()
    }
    createButton() {
        return new WinButton()
    }
    createCheckbox() {
        return new WinCheckbox()
    }
}

export default WinFactory