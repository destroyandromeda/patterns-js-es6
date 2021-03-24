class AbstractClass {
    // A static AbstractClass method.
    static foo() {
      if (this === AbstractClass) {
        // Error Type 2. AbstractClass methods can not be called directly.
        throw new TypeError("Can not call static AbstractClass method foo.");
      } else if (this.foo === AbstractClass.foo) {
        // Error Type 3. The child has not implemented this method.
        throw new TypeError("Please implement static AbstractClass method foo.");
      } else {
        // Error Type 5. The child has implemented this method but also called `super.foo()`.
        throw new TypeError("Do not call static AbstractClass method foo from child.");
      }
    }
    constructor() {
      if (this.constructor === AbstractClass) {
        // Error Type 1. AbstractClass class can not be constructed.
        throw new TypeError("Can not construct AbstractClass class.");
      }
      //else (called from child)
      // Check if all instance methods are implemented.
      if (this.foo === AbstractClass.prototype.foo) {
        // Error Type 4. Child has not implemented this AbstractClass method.
        throw new TypeError("Please implement AbstractClass method foo.");
      }
    }
    // An AbstractClass method.
    foo() {
      // Error Type 6. The child has implemented this method but also called `super.foo()`.
      throw new TypeError("Do not call AbstractClass method foo from child.");
    }
  }