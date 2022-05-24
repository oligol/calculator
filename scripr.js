let userInput = document.getElementById("userInput"),
    calculator = document.querySelector('.calculator'),
    pres = document.querySelectorAll('.pres'),
    expression = '';

function clickFn(){
    for (let i = 0; i < pres.length; i++) {
        console.log(this.textContent);
        break;
    }   
};


pres[0].addEventListener('click', function () {
    expression += 1;
    userInput.value = expression;
});
pres[1].addEventListener('click', function () {
    expression += 2;
    userInput.value = expression;
});
pres[2].addEventListener('click', function () {
    expression += 3;
    userInput.value = expression;
});
pres[3].addEventListener('click', function () {
    expression += "+";
    userInput.value = expression;
});
pres[4].addEventListener('click', function () {
    expression += 4;
    userInput.value = expression;
});
pres[5].addEventListener('click', function () {
    expression += 5;
    userInput.value = expression;
});
pres[6].addEventListener('click', function () {
    expression += 6;
    userInput.value = expression;
});
pres[7].addEventListener('click', function () {
    expression += "-";
    userInput.value = expression;
});
pres[8].addEventListener('click', function () {
    expression += 7;
    userInput.value = expression;
});
pres[9].addEventListener('click', function () {
    expression += 8;
    userInput.value = expression;
});
pres[10].addEventListener('click', function () {
    expression += 9;
    userInput.value = expression;
});
pres[11].addEventListener('click', function () {
    expression += "*";
    userInput.value = expression;
});
pres[12].addEventListener('click', function () {
    expression += ".";
    userInput.value = expression;
});
pres[13].addEventListener('click', function () {
    expression += 0;
    userInput.value = expression;
});
pres[14].addEventListener('click', function () {
    expression = '';
    userInput.value = expression;
});
pres[15].addEventListener('click', function () {
    expression += "/";
    userInput.value = expression;
});
pres[16].addEventListener('click', function () {
    userInput.value = eval(expression);
    expression = '';
});
