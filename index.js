const userInput = require ("./lib/script/inquirer");
const fs = require("fs");
const path = require("path");
const { Shape, Circle, Square, Triangle } = require("./lib/script/shapes");

userInput()
    .then((answers) => {
        const { text, textColor, shape, shapeColor } = answers;
        if (shape === "circle") {
            const circle = new Circle(shapeColor, shapeColor, text, textColor);
            fs.writeFile("./examples/circle.svg", circle.rendCircle(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Circle Logo Built!");
                }
            });
        }
        if (shape === "square") {
            const square = new Square(shapeColor, shapeColor, text, textColor);
            fs.writeFile("./examples/square.svg", square.rendSquare(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Square Logo Built!");
                }
            });
        }if (shape === "triangle") {
            const triangle = new Triangle(shapeColor, shapeColor, text, textColor);
            fs.writeFile("./examples/triangle.svg", triangle.rendTriangle(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Triangle Logo Built!");
                }
            });
        }
    })
    .catch((error) => {
        console.log(error);
    });