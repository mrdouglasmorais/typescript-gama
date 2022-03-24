"use strict";
exports.__esModule = true;
function getPersonType(info, type) {
    var findPerson = info.find(function (item) { return item.gender === type; });
    return findPerson;
}
exports["default"] = getPersonType;
