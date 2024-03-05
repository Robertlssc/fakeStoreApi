function logarEmail(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    var email = document.getElementById('email').value;
    var emailMinusculo = email.toLowerCase()
    var errorEmail = ''

    if(email === ""){
        errorEmail = "Por favor, preencha os campos!"
    }else if(!emailRegex.test(email)){
        errorEmail = "Por favor, insira um enderaço de E-mail válido."
    }else if(emailMinusculo === 'robert@hotmail.com'){
        location.href = "passwordLogin.html"
    }else{
        errorEmail = "E-mail não encontrado, insira um E-mail válido."
    }

    console.log(email)
    document.getElementById('testEmail').innerHTML = errorEmail
}

function logarSenha(){
    var senha = document.getElementById('password').value;
    var errorSenha = ''
    
    if(senha === ""){
        errorSenha = "Por favor, insira sua senha."
    }else if(senha.length < 8 ){
        errorSenha = "Essa senha não conduz com as normas."
    }else if(senha == '12345678'){
        location.href = "../index.html"
        alert('login efetuado!')
    }else{
        errorSenha = "Sua senha está incorreta."
    
    }
    console.log(senha)
    document.getElementById('testSenha').innerHTML = errorSenha
}

function criarEmail(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    var email = document.getElementById('email').value;
    var emailMinusculo = email.toLowerCase()
    var errorEmail = ''

    if(email === ""){
        errorEmail = "Por favor, preencha os campos!"
    }else if(!emailRegex.test(email)){
        errorEmail = "Por favor, insira um enderaço de E-mail válido."
    }else{
        location.href = "passwordRegister.html"
    }
    
    console.log(email)
    document.getElementById('testEmail').innerHTML = errorEmail
}

function criarSenha(){
    var senha = document.getElementById('password').value;
    var errorSenha = ''
    
    if(senha === ""){
        errorSenha = "Por favor, insira sua senha."
    }else if(senha.length < 8 ){
        errorSenha = "Essa senha não conduz com as normas."
    }else{
        location.href = "../index.html"
        alert('cadastro efetuado!')
    
    }
    console.log(senha)
    document.getElementById('testSenha').innerHTML = errorSenha
}

function voltarLogin(){
    location.href = "login.html"
}

function voltarRegister(){
    location.href = "register.html"
}