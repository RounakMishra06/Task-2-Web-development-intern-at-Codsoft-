const display = document.getElementById('display');

let currentInput = '';



function handleButtonClick(value) {

    if (value === 'C') {

        currentInput = '';

        display.value = '0';

    } else if (value === 'DEL') {

        currentInput = currentInput.slice(0, -1) || '';

        display.value = currentInput || '0';

    } else if (value === '=') {

        try {

            const result = eval(currentInput);

            display.value = result;

            currentInput = result.toString();

        } catch (error) {

            display.value = 'Error';

            currentInput = '';

        }

    } else {

        if (currentInput === '0' && value !== '.') {

            currentInput = value;

        } else {

            currentInput += value;

        }

        display.value = currentInput;

    }

}



const buttons = document.querySelectorAll('.calculator button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {

        handleButtonClick(button.value);

    });

});
