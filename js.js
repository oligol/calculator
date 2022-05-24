let userInput = document.getElementById("userInput"),
    calculator = document.querySelector('.calculator'),
    expression = '';

    calculator.addEventListener('click', function(e){
        if(e.target.classList.contains('pres')) {
            expression += e.target.textContent;
            userInput.value = expression;
        }else if(e.target.classList.contains('btn-erase')) {
            expression = "";
            userInput.value = expression;
        }else if(e.target.classList.contains('btn-equal')) {
            userInput.value = eval(expression);
            expression = "";
        }
    });