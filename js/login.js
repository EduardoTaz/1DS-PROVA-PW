function getClient() {
    let client = localStorage.getItem("clients") // tenta obter um item do localStorage do navegador usando a chave "filmesDB". Se houver um item armazenado com a chave "filmesDB", ele será recuperado e armazenado na variável filmes como uma string

    if(client) { // está vazio?
        return JSON.parse(client) 
    } else {
        return []
    }
}

function setClient(client) {
    localStorage.setItem("clients", JSON.stringify(client)) // lista na local storage
}

function submit() {
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let email = document.getElementById("email").value

    if (name == "") {
        alert("[ERRO] Verifique os dados e tente novamente");
        document.getElementById("name").focus();
        return;
    } else if (age == "") {
        alert("[ERRO] Verifique os dados e tente novamente");
        document.getElementById("age").focus(); 
        return;
    } else if (email == "") {
        alert("[ERRO] Verifique os dados e tente novamente");
        document.getElementById("email").focus();
        return;
    }


    let logs = { 
        nameLogs: name,
        ageLogs: age,
        emailLogs: email
    }

    let client = getClient()

    client.push(logs) // atribui o objeto filme para variavel que recebe uma callback da localstorage 'filmesDB'
    
    setClient(client) // adiciona o objeto filme para localstorage 

    alert(`Cliente ${name} cadastrado`);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";

    document.getElementById("name").focus();
}