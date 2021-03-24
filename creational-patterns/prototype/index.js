import Circle from './shapes/Circle'
import Rectangle from './shapes/Rectangle'

class PrototypeExample {
    constructor() {
        this.shapes = []
    }

    getRandomInt(max = 100) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    getRandomColor() {
        let colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]
        return colors[this.getRandomInt(colors.length)]
    }

    getRandomBaseVars() {
        return { x: this.getRandomInt(), y: this.getRandomInt(), color: this.getRandomColor() }
    }

    init() {
        let circle = new Circle({ radius: this.getRandomInt(), ...this.getRandomBaseVars() })
        let rectangle = new Rectangle({ width: this.getRandomInt(20), height: this.getRandomInt(20), ...this.getRandomBaseVars() })
        this.shapes.push(circle)
        this.shapes.push(rectangle)
    }

    start() {
        let clonedShapes = []
        this.shapes.map(shape => {
            clonedShapes.push(shape.clone())
        })
        let clonedShapesAgain = []
        clonedShapes.map(shape => {
            clonedShapesAgain.push(shape.clone())
        })
        console.log('shapes', this.shapes)
        console.log('clonedShapes', clonedShapes)
        console.log('clonedShapesAgain', clonedShapesAgain)
    }
}

export default PrototypeExample