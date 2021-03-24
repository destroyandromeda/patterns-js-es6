import Dialog from "./Dialog"
import ButtonTypeTwo from "../buttons/ButtonTypeTwo"
class DialogTypeTwo extends Dialog {
    constructor() {
        super()
    }

    clickFunc() {
        console.log('test click 2')
    }

    createButton() {
        return new ButtonTypeTwo()
    }
}

export default DialogTypeTwo