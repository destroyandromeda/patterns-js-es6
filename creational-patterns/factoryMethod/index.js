
import DialogTypeOne from "./dialogs/DialogTypeOne"
import DialogTypeTwo from "./dialogs/DialogTypeTwo"
import Dialog from './dialogs/Dialog';

class FactoryMethodExample {
    constructor(type){
        this.type = type
    }

    changeType(type){
        this.type = type
        return this.start()
    }

    start(){
        let dialog

        if(this.type === 1){
            dialog = new DialogTypeOne()
        }else if(this.type === 2) {
            dialog = new DialogTypeTwo()
        }else{
            dialog = new Dialog()
        }

        dialog.renderWindow()

    }
}

export default FactoryMethodExample