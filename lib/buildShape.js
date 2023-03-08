const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");

const buildShape = (answers) => {
    switch (answers.shape) {
        case 'Circle':
            const buildCircle = new Circle(answers);
            return buildCircle;
            break;
        case 'Triangle':
            const buildTriangle = new Triangle(answers);
            return buildTriangle;
            break;
        case 'Square':
            const buildSquare = new Square(answers);
            return buildSquare;
            break;
        default:
            return "Error";
            break;
    }
}

module.exports = { buildShape };