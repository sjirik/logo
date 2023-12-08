class Shape {
    constructor(stroke, fill, text, textColor) {
        this.fill = fill;
        this.stroke = stroke;
        this.text = text;
        this.textColor= textColor;
    }
    renderChar(){
        return `<text text-anchor="middle" x="250" y="300" font-size="60px" fill= "${this.textColor}">${this.text}</text>`;
    }
}
class Circle extends Shape {
    constructor(stroke, fill, text, textColor) {
      super(stroke, fill, text, textColor);
    }
  
    rendCircle() {
      return `<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle cx="250" cy="250" r="200" stroke="${this.stroke}" fill="${
        this.fill
      }"/>
      ${this.renderChar()}
      </svg>`;
    }
  }
  
  class Square extends Shape {
    constructor(stroke, fill, text, textColor) {
      super(stroke, fill, text, textColor);
    }
  
    rendSquare() {
      return `<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect x="100" y="100" width="300" height="300" stroke="${
        this.stroke
      }" fill = '${this.fill}' />
      ${this.renderChar()}
      </svg>`;
    }
  }
  
  class Triangle extends Shape {
    constructor(stroke, fill, text, textColor) {
      super(stroke, fill, text, textColor);
    }
  
    rendTriangle() {
      return `<svg
      width="500"
      height="500"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="250,60 100,400 400,400"
        stroke="${this.stroke}"
        fill="${this.fill}"
        stroke-width="5" />
        ${this.renderChar()}
      </svg>`;
    }
  }
  
  module.exports = {
    Shape,
    Circle,
    Square,
    Triangle,
  };