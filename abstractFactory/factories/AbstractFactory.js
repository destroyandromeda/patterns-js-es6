class AbstractFactory {
    constructor() {
        if (this.constructor === AbstractFactory) {
            throw new TypeError("Can not construct abstract class.");
        }
        if (this.createButton === AbstractFactory.prototype.createButton) {
            throw new TypeError("Please implement abstract method createButton.");
        }
        if (this.createCheckbox === AbstractFactory.prototype.createCheckbox) {
            throw new TypeError("Please implement abstract method createCheckbox.");
        }
    }

    createButton() {
        throw new TypeError("Do not call abstract method createButton from child.");
    }
    createCheckbox() {
        throw new TypeError("Do not call abstract method createCheckbox from child.");
    }
}

export default AbstractFactory