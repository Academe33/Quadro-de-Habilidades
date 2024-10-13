// Exemplo de chamada para salvar os dados em um servidor
async function saveDataToServer() {
    const nodes = document.querySelectorAll('.fibonacci-node');
    let data = {};

    nodes.forEach((node, index) => {
        const titleInput = node.querySelector('.title-input').value;
        const subjectInputs = node.querySelectorAll('input[type="text"]:not(.title-input)');
        const subjects = Array.from(subjectInputs).map(input => input.value);
        data[`habilidade_${index + 1}`] = { title: titleInput, subjects: subjects };
    });

    // Envia os dados para o servidor
    await fetch('https://seuservidor.com/api/salvar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}
