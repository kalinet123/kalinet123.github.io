// Datos de criptomonedas (simulados)
const cryptoData = [
    { name: "Bitcoin", price: "$29,000", change: "+2.5%" },
    { name: "Ethereum", price: "$1,800", change: "+1.8%" },
    { name: "Cardano", price: "$0.30", change: "-0.5%" },
    { name: "Solana", price: "$25", change: "+3.2%" },
    { name: "Polkadot", price: "$5.50", change: "+1.1%" },
];

// Función para cargar datos en la tabla
function loadCryptoData() {
    const tableBody = document.querySelector("#crypto-table tbody");
    tableBody.innerHTML = ""; // Limpiar tabla

    cryptoData.forEach((crypto) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${crypto.name}</td>
            <td>${crypto.price}</td>
            <td>${crypto.change}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Cargar datos al iniciar la página
window.onload = loadCryptoData;