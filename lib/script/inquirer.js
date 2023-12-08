const inquirer = require("inquirer");

function userInput() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter three characters maximum",
            name: "text",
            validate: function (input) {
                const done = this.async();
                if (input.length > 3 || input.length === 0) {
                    done("Character count must be between 1 and 3");
                    return;
                }
                done(null, true);
            }
        },
        {
            type: "input",
            message: "Enter text color",
            name: "textColor" 
        },
        {
            type: "list",
            message: "Choose a shape",
            name: "shape",
            choices: ["circle","square","triangle"],
            default: "circle"
        },
        {
            type: "input",
            message: "Enter shape color",
            name: "shapeColor"
        }
    ]);
}

module.exports = userInput;