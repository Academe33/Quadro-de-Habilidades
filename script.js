function saveData() {
    const nodes = document.querySelectorAll('.fibonacci-node');
    let data = {};

    nodes.forEach((node, index) => {
        const titleInput = node.querySelector('.title-input').value;
        const subjectInputs = node.querySelectorAll('input[type="text"]:not(.title-input)');
        const subjects = Array.from(subjectInputs).map(input => input.value);
        data[`habilidade_${index + 1}`] = { title: titleInput, subjects: subjects };
    });

    // Envia os dados para o servidor usando fetch
    fetch('https://seu-dominio.com/saveData', { // Substitua pela URL do seu servlet
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            console.log("Dados salvos no servidor.");
        } else {
            console.error("Erro ao salvar os dados.");
        }
    })
    .catch(error => {
        console.error("Erro de rede:", error);
    });
}
