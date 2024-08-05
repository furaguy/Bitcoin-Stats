// script.js

async function fetchBitcoinData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
        const data = await response.json();

        const totalMinted = data.market_data.circulating_supply;
        const bitcoinsLeft = 21000000 - totalMinted;

        document.getElementById('totalMinted').innerText = totalMinted.toFixed(8);
        document.getElementById('remaining').innerText = bitcoinsLeft.toFixed(8);
    } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
        document.getElementById('totalMinted').innerText = 'Error loading data';
        document.getElementById('remaining').innerText = 'Error loading data';
    }
}

document.addEventListener('DOMContentLoaded', fetchBitcoinData);
