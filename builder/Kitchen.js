class Kitchen {
    /**
    * @param AbstractPizzaBuilder builder
    */
    constructor(builder) {
        this.builder = builder
    }

    cook() {

        this.builder.buildForm()
        this.builder.buildSause()
        this.builder.buildTopping()

        return this.builder.getResult()
    }
}

export default Kitchen