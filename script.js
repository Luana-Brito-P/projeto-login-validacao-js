function validarEmail(){
    let email = document.getElementById('email').value 
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(regex.test(email)){ //true formato certo
        alert('Email cadastrado com sucesso!')
    }else{
        alert('Email inválido. Tente novamente!')
    }
}