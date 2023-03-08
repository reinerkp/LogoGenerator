const fs = require("fs");
const inquirer = require("inquirer");
const color = require("color")
const Circle = require("./shapes")
// const generateSVG = require()

// class LogoPrompt {
//     constructor() {
//         this.logoletters = null;
//         this.shapes = null;
//         this.textColor = null;
//         this.shapeColor = null;
//     }
// }

// user prompts for custom logo
// const askQuestions = () => {
inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoLetters',
            message: 'Please enter up to 3 characters for your logo: ',
            // Validate maybe with a return for length of answer?
            // validate: (input) => {
            //     return input.length > 0 && input.length <= 3
            // }
            // test parameter for this and how to do that?
        },
        {
            type: 'list',
            name: 'shapes',
            message: 'Please choose a shape for your logo:',
            choices: ["circle", "triangle", "square"],
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Choose the color of the text:',
            // another Validate with return?
            // validate: (input) => {
            //     const color= Color(input)
            //     return =???
            // }
            // Need an NPM for color and how do you pull from it?
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Choose the color of the shape: ',
            // another Validate with return?
            // validate: (input) => {
            //     const color= Color(input)
            //     return =???
            // }
            // Need an NPM for color and how do you pull from it?
        },

    ])
    .then((answers) => {
        console.log(answers);})
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
