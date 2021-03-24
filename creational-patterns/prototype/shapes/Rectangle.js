import Shape from './Shape'

class Rectangle extends Shape {
    constructor({ width, height, x, y, color }) {
        super({ x, y, color })
        this.width = width
        this.height = height
    }

    clone() {
        return new Rectangle(this)
    }

}

export default Rectangle