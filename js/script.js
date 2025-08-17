function validarEmail(){
    let email = document.getElementById('email').value 
    let input = document.getElementById('email')
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(regex.test(email)){ //true formato certo
        window.location.href = `pagina-sucesso.html?email=${encodeURIComponent(email)}`
        //enviado dados sem beckend atraves do query string(parte que vem dps do ponto de interrogação)
    }else{
    //mensagem de erro
        document.getElementById('error').style.display = 'inline-block'
    //Input
        input.style.backgroundColor = '#FFE8E6'
        input.style.border = '2px solid #BE7F7A'
        input.value = ''
        input.placeholder = `${email}`
        input.classList.add('red-placeholder') // adiciona uma classe 'red-placeholder' no input, la no css tem as propriedades
    }

    document.getElementById('success').innerHTML += `${email}`
}