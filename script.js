const queue = [];

function addToQueue() {
    const clientName = document.querySelector('input[name="cliente"]').value;
    const color = document.querySelector('input[name="corDeFundo"]').value;
    queue.push({ name: clientName, color: color });
    updateQueue();
}

function removeFromQueue() {
    if (queue.length > 0) {
        queue.shift();
        updateQueue();
    }
}

function updateQueue() {
    const queueElement = document.getElementById("queue");
    queueElement.innerHTML = "";
    queue.forEach(client => {
        const clientElement = document.createElement("div");
        clientElement.style.color = client.color;
        clientElement.textContent = client.name;
        queueElement.appendChild(clientElement);
    });
}

function listReverseQueue() {
    const queueElement = document.getElementById("queue");
    queueElement.innerHTML = "";
    for (let i = queue.length - 1; i >= 0; i--) {
        const client = queue[i];
        const clientElement = document.createElement("div");
        clientElement.style.backgroundColor = client.color;
        clientElement.textContent = `${client.name} - Cor: ${client.color}`;
        queueElement.appendChild(clientElement);
    }
}
