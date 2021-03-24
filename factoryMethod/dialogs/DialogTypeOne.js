import Dialog from "./Dialog"
import ButtonTypeOne from "../buttons/ButtonTypeOne"
class DialogTypeOne extends Dialog {
    constructor() {
        super()
    }

    clickFunc() {
        console.log('test click 1')
    }
    createButton() {
        return new ButtonTypeOne()
    }
}

export default DialogTypeOne