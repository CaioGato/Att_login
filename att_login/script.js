function salvardados(){
    var name = document.getElementById('name').value
    var senha = document.getElementById('senha').value

    var usuario = {
        name: name,
        senha: senha,
    }
    console.log(usuario);
}