document.addEventListener('DOMContentLoaded', function () {
    const displayScreen = document.querySelector('.display-screen');
    let expression = '';

    // Function to update the display
    function updateDisplay() {
        displayScreen.value = expression || '0';
    }

    // Function to handle number and operator button clicks
    function handleButtonClick(event) {
        const value = event.target.value;

        // Clear button
        if (value === 'C') {
            expression = '';
        }
        // Equal button
        else if (value === '=') {
            try {
                expression = eval(expression);
            } catch (error) {
                expression = 'Error';
            }
        }
        // Other buttons
        else {
            expression += value;
        }

        updateDisplay();
    }

    // Add click event listener to all buttons
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});
