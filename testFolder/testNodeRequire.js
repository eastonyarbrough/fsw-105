//Require testNodeModules.js to complete output.
const funcToUse = require("./testNodeModules.js");

const num1 = 10;
const num2 = 13;
const num3 = 27;

funcToUse.getEvenOrOdd(num1);
funcToUse.getEvenOrOdd(num2);
funcToUse.getEvenOrOdd(num3);

funcToUse.addVar(num1, num2, num3);
