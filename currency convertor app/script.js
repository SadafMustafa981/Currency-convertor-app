// script.js

// Static exchange rates for simplicity (can be updated with live API calls)
const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, INR: 73.56 },
    EUR: { USD: 1.18, GBP: 0.88, INR: 86.49 },
    GBP: { USD: 1.33, EUR: 1.14, INR: 98.10 },
    INR: { USD: 0.014, EUR: 0.012, GBP: 0.010 },
};

// Function to convert currency
function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount)) {
        document.getElementById('result').innerText = 'Please enter a valid amount.';
        return;
    }

    // If the currencies are the same, no conversion is needed
    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = `Converted Amount: ${amount} ${toCurrency}`;
        return;
    }

    // Get the exchange rate from the static exchangeRates object
    const rate = exchangeRates[fromCurrency][toCurrency];

    // Calculate the converted amount
    const convertedAmount = (amount * rate).toFixed(2);

    // Display the result
    document.getElementById('result').innerText = `Converted Amount: ${convertedAmount} ${toCurrency}`;
}
