
function createCard(title, description) {
    return `
        <div class="card">
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
    `;
}

const container = document.getElementById("cards-container");


const container = document.getElementById("cards-container");

container.innerHTML =
    createCard("Artificial Intelligence", "Machines that learn") +
    createCard("Web3", "The decentralised internet") +
    createCard("Robotics", "Intelligent machines");

