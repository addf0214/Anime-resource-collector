var library = require("./library.js");

var permittedFormats = library.getFormatAliases();
var upperPermittedFormats = permittedFormats.map((cur) => cur.toUpperCase());

var isWorthCreateNewItem = (text) =>
  upperPermittedFormats.some(
    (format) => text.toUpperCase().indexOf(format) !== -1
  );

var sliceString = function (wholeString, before, after) {
  var indexBefore = wholeString.indexOf(before);
  var indexAfter = wholeString.indexOf(after, indexBefore);
  if (indexBefore === -1 || indexAfter === -1) {
    return "";
  } else {
    return wholeString.slice(indexBefore + before.length, indexAfter);
  }
};

module.exports = { isWorthCreateNewItem, sliceString };
