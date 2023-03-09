const fs = require("fs");
const inquirer = require("inquirer");
const { type } = require("os");
const { generateSVG } = require("./lib/generateSVG");
const { buildShape } = require("./lib/buildShape");

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

                
            }
            
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
         
        },
        {
            type: 'list',
            name: 'shapeColor',
            message: 'Choose the color of the shape:',
            choices: ["Green", "Blue", "Orange", "Yellow", "Red", "Pink", "Purple", "White", "Black", "Brown"],
     
        },

    ])
    .then((answers) => {
        console.log(answers);
        const outPath = './dist/logo.svg';
        const logo = buildShape(answers);

        // Output the SVG
        fs.writeFile(outPath, generateSVG(logo), (err) =>
            err ? console.error(err) : console.log('Successfully generated logo.svg'));
    })
    .catch((err) => console.error(err));


// askQuestions();
// // What function do I need to do generate te SVG fil