"use strict";
exports.__esModule = true;
var function_1 = require("./src/function");
var object_1 = require("./src/object");
console.log(object_1["default"]);
console.log('Retorna genero masculino', (0, function_1["default"])(object_1["default"], 'Female'));
console.log('Retorna genero feminino', (0, function_1["default"])(object_1["default"], 'Male'));
