class AbstractCheckbox {
    constructor() {
        if (this.constructor === AbstractCheckbox) {
            throw new TypeError("Can not construct abstract class.");
        }
        if (this.render === AbstractCheckbox.prototype.render) {
            throw new TypeError("Please implement abstract method render.");
        }
    }

    // An abstract method.
    render() {
        throw new TypeError("Do not call abstract method render from child.");
    }
}

export default AbstractCheckbox