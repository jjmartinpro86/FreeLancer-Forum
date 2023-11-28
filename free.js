const names = ['Steve', 'Jim', 'Dwight', 'Pam', 'Andy', 'Angela', 'Kelly', 'Ryan', 'David'];
const occupations = ['Personal Chef', 'Magician', 'Sales', 'CPA', 'Boatswain', 'Lego Creator', 'Veterinarian', 'Artist'];
const rates = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110'];
const maxWriters = 20;

let freeLanceWriters = [];

function calculateAveragePrice() {
    let sum = freeLanceWriters.reduce((total, writer) => total + writer.startingPrice, 0);
    return sum / freeLanceWriters.length;
}

function updateAveragePriceDisplay() {
    const avgPriceEl = document.querySelector("#average-price");
    avgPriceEl.innerHTML = calculateAveragePrice().toFixed(2);
}

function render() {
    const freeLanceWritersEl = document.querySelector("tbody");
    const template = freeLanceWriters.map(writer => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.textContent = writer.name;
        const td2 = document.createElement("td");
        td2.textContent = writer.occupation;
        const td3 = document.createElement("td");
        td3.textContent = writer.startingPrice;
        tr.append(td1, td2, td3);
        return tr;
    });
    freeLanceWritersEl.replaceChildren(...template);
}

function addWriter() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const rate = rates[Math.floor(Math.random() * rates.length)];
    const startingPrice = parseInt(rate);
    freeLanceWriters.push({ name, occupation, startingPrice });
    render();
    updateAveragePriceDisplay();
}

function startCounter(counter = 0) {
    if (counter < maxWriters) {
        setTimeout(() => {
            addWriter();
            startCounter(counter + 1);
        }, 1000); // 1-second delay
    }
}

startCounter();

