let instance = null
let getInstanceFlage = false
class Singleton {

    static getRandomInt(max = 100) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    constructor() {
        if (this.constructor === Singleton && !getInstanceFlage) {
            throw new TypeError("Can not construct Singleton class.");
        }
        this.randomData = Singleton.getRandomInt()
    }

    static getInstance() {
        getInstanceFlage = true
        if (instance == null) {
            if (instance == null) {
                instance = new Singleton()
            }
        }
        getInstanceFlage = false
        return instance
    }

}

export default Singleton