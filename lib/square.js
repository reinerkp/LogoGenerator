const Shape = require("./shape");

class Square extends Shape {
    constructor(answers) {
        super(answers);
    }
    render() {
        return `<rect width="100" height="100" rx="15" fill="${this.shapeColor}"/>`;
    }
}

module.exports = Square;