const generateSVG = (shape) => {
    svgValue = 
    `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shape.render()}
        <text
            x="50%"
            y="${shape.shape != "Triangle" ? "50%" : "40%"}"
            text-anchor="middle"
            fill="${shape.textColor}"
            font-size="2.5rem" letter-spacing="2" dy=".2em"
            font-family="Arial">${shape.logoLetters}</text>
    </svg>`;

    return svgValue;
};

module.exports = { generateSVG };