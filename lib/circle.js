const Shape = require("./shape");

class Circle extends Shape {
    constructor(answers) {
        super(answers);
    }
    render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}"/>`;
    }
}

module.exports = Circle;