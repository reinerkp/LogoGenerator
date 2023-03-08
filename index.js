const fs = require("fs");
const inquirer = require("inquirer");
const { type } = require("os");
const shapes = require('./lib/shapes.js');

inquirer
    .prompt ([
        {
            type: 'input',
            name: 'logoLetters',
            message: 'Please enter up to 3 characters for your logo:',
            validate: (input) => {
                if (input.length > 3) {
                    return 'Your text is too long. Enter up to 3 characters for your logo.';
                }
                else if (input.length <= 0) {
                    return 'No input. Enter up to 3 characters for your logo.';
                }
                else {
                    return true;
                }

                //return true;
            }
            // Validate maybe with a return for length of answer?
            // validate: (input) => {
            //     return input.length > 0 && input.length <= 3
            // }
            // test parameter for this and how to do that?
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose a shape for your logo:',
            choices: ["Circle", "Triangle", "Square"],
        },
        {
            type: 'list',
            name: 'textColor',
            message: 'Choose the color of the text:',
            choices: ["Green", "Blue", "Orange", "Yellow", "Red", "Pink", "Purple", "White", "Black", "Brown"],
            // another Validate with return?
            // validate: (input) => {
            //     const color= Color(input)
            //     return =???
            // }
            // Need an NPM for color and how do you pull from it?
        },
        {
            type: 'list',
            name: 'shapeColor',
            message: 'Choose the color of the shape:',
            choices: ["Green", "Blue", "Orange", "Yellow", "Red", "Pink", "Purple", "White", "Black", "Brown"],
            // another Validate with return?
            // validate: (input) => {
            //     const color= Color(input)
            //     return =???
            // }
            // Need an NPM for color and how do you pull from it?
        },

    ])
    .then((answers) => {
        console.log(answers);
        var shape;
        switch (answers.shape) {
            case "Circle":
                shape = new Circle();
                console.log("Circle");
            case "Triange":
                shape = new Triangle();
                console.log("Triangle");
            case "Square":
                shape = new Square();
                console.log("Square");
            default:
                console.log("Invalid");
        }
    })
//         var shapes;
//         // console.log(answers);
//         if (answers.shapes === "circle") {
//             shapes = new Circle()
//             console.log(shapes)
//         }
//         if (answers.shapes === "square") {
//             shapes = new Circle()
//             console.log(shapes)
//         }
//         if (answers.shapes === "triangle") {
//             shapes = new Circle()
//             console.log(shapes)
//         }
//         shapes.setColor
// }

// askQuestions();
// // What function do I need to do generate te SVG fil

// Function for SVG generation
function generateSVG(letters, shape, textColor, shapeColor) {

}