function validarEmail(){
    let email = document.getElementById('email').value 
    let input = document.getElementById('email')
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(regex.test(email)){ //true formato certo
        window.location.href = "pagina-sucesso.html"
    }else{
        input.style.backgroundColor = '#FFE8E6'
        input.style.border = '2px solid #BE7F7A'
        input.value = ''
        input.placeholder = `${email}`
        document.getElementById('error').style.display = 'inline-block'
    }

    document.getElementById('success').innerHTML += `${email}`
}