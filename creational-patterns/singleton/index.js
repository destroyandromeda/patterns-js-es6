import Singleton from './Singleton'

class SingletonExample {

    static start() {

        console.log(Singleton.getInstance())
        console.log(Singleton.getInstance())
        console.log(Singleton.getInstance())

    }

}

export default SingletonExample