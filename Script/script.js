function entrar(){
    var name = document.getElementById('name').value;
    var password = document.getElementById('senha').value;

    var name_correct = 'Caio';
    var pass_correct = '123';

    if( (name === name_correct) && (password === pass_correct)){
        
        alert("Entrooo")

    }else{
        alert("Usuario ou senha incorretos")
    }
    window.location.href = './index2.html'

}