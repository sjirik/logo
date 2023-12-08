const promptUser = require ("./lib/script/inquirer");
const fs = require("fs");
const path = require("path");
const { Shape, Circle, Square, Triangle } = require("./lib/script/shapes");

promptUser()
    .then((answers) => {
        const { text, textColor, shape, shapeColor } = amswers;
        if (shape === "circle") {
            const circle = new Circle(shapeColor, shapeColor, text, textColor);
            fs.writeFile("./examples/circle.svg", circle.renderCircle(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Circle Logo Built!");
                }
            });
        }
        if (shape === "square") {
            const square = new Square(shapeColor, shapeColor, text, textColor);
            fs.writeFile("./examples/square.svg", square.renderSquare(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Square Logo Built!");
                }
            });
        }if (shape === "triangle") {
            const triangle = new Triangle(shapeColor, shapeColor, text, textColor);
            fs.writeFile("./examples/triangle.svg", triangle.renderTriangle(), (err) => {
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