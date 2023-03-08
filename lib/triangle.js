const Shape = require("./shape");

class Triangle extends Shape {
    constructor(answers) {
        super(answers);
    }
    render() {
        return `<polygon points="100 0, 0, 0 50, 100" fill="${this.shapeColor}"/>`
    }
}

module.exports = Triangle;