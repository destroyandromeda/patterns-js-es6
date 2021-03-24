import Shape from './Shape'

class Circle extends Shape {
    constructor({ radius, x, y, color }) {
        super({ x, y, color })
        this.radius = radius
    }

    clone() {
        return new Circle(this)
    }

}

export default Circle