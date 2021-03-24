import Button from '../buttons/Button';

class Dialog{
    constructor(){

    }

    renderWindow(){
        let button = this.createButton()
        button.render()
        button.onClick(()=>{this.clickFunc()})
    }

    clickFunc(){
        console.log('clicked')
    }
    
    createButton(){
        return new Button()
    }
}

export default Dialog