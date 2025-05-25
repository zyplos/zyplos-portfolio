const adobeData = require("./adobeData.json");
const newData = [];

const data = adobeData.elements;

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

// decimals get rounded
// adobe uses rgb2hex from here: https://github.com/christian-bromann/rgb2hex/blob/master/index.js
// this is a cut down version of the code from there
function rgbToHex(red, green, blue) {
  // const red = Math.round(r);
  // const green = Math.round(g);
  // const blue = Math.round(b);

  const rgb = (blue | (green << 8) | (red << 16) | (1 << 24))
    .toString(16)
    .slice(1);

  return `#${rgb.toString(16)}`;
}

const checking = false;

const zyColors = [];

for (const colorData of data) {
  const reps = colorData.representations;

  if (checking) {
    if (reps.length > 1 || reps.length === 0) {
      console.log("=== MORE THAN 1 REP", colorData);
    }
  }

  const rep = reps[0];
  const repColorData = rep["color#data"];

  if (checking) {
    if (repColorData.mode !== "RGB") {
      console.log("=== NOT RGB", colorData);
    }
  }

  const r = Math.round(repColorData.value.r);
  const g = Math.round(repColorData.value.g);
  const b = Math.round(repColorData.value.b);

  if (checking) {
    if (isFloat(r) || isFloat(g) || isFloat(b)) {
      console.log("=== RGB IS NOT AN INT", colorData);
    }
  }

  const hex = rgbToHex(r, g, b);
  console.log(colorData.name.padEnd(30, " "), hex);

  // check if name starts with "Zyplos"
  if (colorData.name.startsWith("Zyplos")) {
    zyColors.push({
      name: colorData.name,
      // createdDate: colorData.created_date,
      // modifiedDate: colorData.modified_date,
      // colorProfile: repColorData.profileName,
      hex,
      rgb: { r, g, b },
    });
  } else {
    newData.push({
      name: colorData.name,
      // createdDate: colorData.created_date,
      // modifiedDate: colorData.modified_date,
      // colorProfile: repColorData.profileName,
      hex,
      rgb: { r, g, b },
    });
  }
}

const zyColorOrder = [
  "Red",
  "Yellow",
  "Gray",
  "Dark Gray",
  "Slate",
  "Deepslate",
  "Bedrock",
  "Green",
];

// reverse order
zyColorOrder.reverse();

for (const orderColor of zyColorOrder) {
  console.log("orderColor", orderColor);
  // find the color in the zyColors array and remove it
  const foundColor = zyColors.find((color) => color.name.includes(orderColor));
  if (foundColor) {
    newData.unshift(foundColor);
    zyColors.splice(zyColors.indexOf(foundColor), 1);
  }
}

// add the rest of the zyColors after the index of the first color in the zyColorOrder in newData
newData.splice(zyColorOrder.length, 0, ...zyColors);

// save to colorData.json
const fs = require("node:fs");
fs.writeFileSync("colorData.json", JSON.stringify(newData, null, 2));
