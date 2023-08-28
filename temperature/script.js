function convertToCelsius() {
    const fahrenheitValue = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheitValue)) {
        const celsiusValue = (fahrenheitValue - 32) * (5 / 9);
        document.getElementById('celsius').value = celsiusValue.toFixed(2);
    }
}

function convertToFahrenheit() {
    const celsiusValue = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
        document.getElementById('fahrenheit').value = fahrenheitValue.toFixed(2);
    }
}
