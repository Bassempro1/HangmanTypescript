// 1.Start an array of words
var listWord = ["happy", "smile", "motivate", "awesome"];
// 2.Select random word
var randNumber = Math.floor(Math.random() * listWord.length);
// Math.random() function returns a floating-point in the range 0 to less than 1 
// Math.floor() function returns the largest integer less than or equal to a given number.
var ranWord = listWord[randNumber];
console.log(ranWord);
var emptyArray = [];
// 3.Populate underscores
var createArray = function () {
    for (var n = 0; n < ranWord.length; n++) {
        emptyArray.push('_');
    }
    return emptyArray;
};
console.log(createArray());
// 4.Ask users for guess
document.addEventListener('keypress', function (event) {
    var keycode = event.keyCode;
    // keyCode property returns the Unicode character code of the key
    var keyword = String.fromCharCode(keycode);
    // fromCharCode() is a string method that is used to create a string from a sequence of Unicode values
    console.log(event);
    // document.addEventListener() method attaches an event handler to the document
    // addEventListener() works by adding a function or an object that implements
    // keypress() method triggers the keypress event
});
// 5.Test if guess is good
// 6.If guess is good then push to good array
// 7.If guess is wrong then push to wrong array
