function getClient() {
    let client = localStorage.getItem("clients") // tenta obter um item do localStorage do navegador usando a chave "filmesDB". Se houver um item armazenado com a chave "filmesDB", ele será recuperado e armazenado na variável filmes como uma string

    if(client) { // se filmes tiver um valor...  senao se for null, undefined ou uma string vazia...
        return JSON.parse(client) // CONVERTE A STRING JSON EM UM OBJETO E O JS RETORNA, POIS HÁ UMA STRING ARMAZENADA NA VARIAVEL "filmes" 
    } else {
        return [] //retorna uma string vazia se nao houver dados
    }
}

function setClient() {
    let client = getClient()
    let content =  `
        <table class="tableBox">

        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
        </thead>

        <tbody>
    `;

    for (let i = 0; i < client.length; i++) {
        let logs = client[i];
        console.log(logs);
        content += `
            <tr>
                <td>${logs.nameLogs}</td>
                <td>${logs.ageLogs}</td>
                <td>${logs.emailLogs}</td>
            </tr>
        `;
    }

    content += ` 
        </tbody>
    </table>
    `;

    document.getElementById("client-list").innerHTML = content;

}

setClient()
