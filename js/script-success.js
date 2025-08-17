//API que pega a query string(parte dps da interrogação) da URL
    const params = new URLSearchParams(window.location.search)

    let email = params.get('email')

    if(email){
    document.getElementById('user-email').textContent = email
    } else{
        document.getElementById('user-email').textContent = 'your email'
    }