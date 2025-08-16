let participantes = [];
let amigoInput = document.getElementById(`amigo`);
amigoInput.focus();

function adicionarAmigo(){
    resultado.innerHTML = ``;
    let amigo = document.getElementById(`amigo`).value;
    if (amigo == ``){
        alert(`Por favor, insira um nome válido.`)
    }
    else {
        participantes.push(amigo);        
    }
    let listaAmigos = document.getElementById(`listaAmigos`);
    listaAmigos.innerHTML += `<li>${amigo}</li>`
    amigoInput.value = ``;
    amigoInput.focus();
    
}

function sortearAmigo(){
    if (participantes.length == 0){
        alert(`A lista de amigos está vazia. Adicione nomes e tente novamente.`)
    }
    else {
        let tamanhoLista = participantes.length
        let resultado = document.getElementById(`resultado`);
        let amigoSecreto = Math.floor(Math.random() * tamanhoLista);
        resultado.innerHTML = `O seu amigo secreto é: ${participantes[amigoSecreto]}`
    }
    amigoInput.focus();
}