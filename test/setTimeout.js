var myVar;

function myFunction() {
    myVar = setTimeout(alertFunc, 3000,'你妹','你弟');
}

function alertFunc(haha,xixi) {
    console.log("Hello!"+haha+xixi);
}
myFunction();
