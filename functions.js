function myFunction(value) {
    var num = value.length;
    return num;
}
console.log("The amount of letters in Hello World is " + myFunction("Hello World"));
//function for excluding spaces
function myFunction1(value) {
    var num = value.replace(/\s+/, "").length;
    return num;
}
//let value = "Hello World"
console.log("The amount of letters in Hello World is " + myFunction1("Hello World"));
//function for either option 
function myFunction2(value, spaces) {
    if (spaces === void 0) { spaces = false; }
    var num;
    if (spaces) {
        num = value.replace(/\s+/, "").length;
    }
    else {
        num = value.length;
    }
    return num;
}
console.log("The amount of letters in Hello World is " + myFunction2("Hello World"));
