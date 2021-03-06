// 1.Start an array of words
var listWord = ["joyful", "smile", "light", "bright"];
// 2.Select random word
var randNumber = Math.floor(Math.random() * listWord.length);
// Math.random() function returns a floating-point in the range 0 to less than 1 
// Math.floor() function returns the largest integer less than or equal to a given number.
var ranWord = listWord[randNumber];
var goodWord = []; // good word array
var wrongWord = []; // wrong word array
console.log(ranWord);
var emptyArray = [];
// Connection with DOM
var DOMemptyArray = document.getElementsByClassName('emptyArray');
var DOMgoodWord = document.getElementsByClassName('goodWord');
var DOMwrongWord = document.getElementsByClassName('wrongWord');
// 3.Populate emptyArray
var createArray = function () {
    for (var n = 0; n < ranWord.length; n++) {
        emptyArray.push('_');
    }
    return emptyArray;
};
console.log(createArray());
// 4.Ask users for guess
document.addEventListener('keypress', function (event) {
    // document.addEventListener() method attaches an event handler to the document
    // addEventListener() works by adding a function or an object that implements
    // keypress() method triggers the keypress event
    var keycode = event.keyCode;
    // keyCode property returns the Unicode character code of the key
    var keyword = String.fromCharCode(keycode);
    // fromCharCode() is a string method that is used to create a string from a sequence of Unicode values
    console.log(keyword);
    // 5.Test if guess is good
    if (ranWord.indexOf(keyword) > -1) {
        // indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
        // 6.If guess is good then push to good array
        goodWord.push(keyword);
        // replace underscore in emptyAraay with good word
        emptyArray[ranWord.indexOf(keyword)] = keyword;
        // connect the word pushed to DOM
        DOMemptyArray[0].innerHTML = emptyArray.join(' ');
        DOMgoodWord[0].innerHTML = goodWord.join('');
        // test if user word matches guesses
        if (emptyArray.join('') == ranWord) {
            alert('Awesome Winner');
        }
    }
    // 7.If guess is wrong then push to wrong array
    else {
        wrongWord.push(keyword);
        DOMwrongWord[0].innerHTML = wrongWord.join('');
    }
});
