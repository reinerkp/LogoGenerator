class Shape {
    constructor({ logoLetters, shape, textColor, shapeColor }) {
        this.shape = shape;
        this.logoLetters = logoLetters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        throw new Error('TEMP');
    }
}

module.exports = Shape;