class Shape {
    constructor({ x, y, color }) {
        this.x = x
        this.y = y
        this.color = color
        if (this.constructor === Shape) {
            throw new TypeError("Can not construct Shape class.");
        }
        if (this.clone === Shape.prototype.clone) {
            throw new TypeError("Please implement Shape method clone.");
        }
    }

    clone() {
        throw new TypeError("Do not call Shape method clone from child.");
    }
}
export default Shape