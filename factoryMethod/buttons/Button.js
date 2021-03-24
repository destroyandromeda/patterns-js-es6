class Button {
    render() {
        console.log('release button in child');
    }
    
    onClick(cb) {
        cb()
    }
}

export default Button