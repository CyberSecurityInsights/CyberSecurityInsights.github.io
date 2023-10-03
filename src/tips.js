const quizLink = document.getElementById("quiz");
const noticiasDiv = document.getElementById("newscontainer");

quizLink.addEventListener("click", function() {
    noticiasDiv.innerHTML = "";
    quizLink.textContent = "Notícias"

    var formulario = document.createElement('form')
    
    var quizContent = document.createElement("div")
    var title = document.createElement('h1')
    var userInput = document.createElement('input')
    var pwdInput = document.createElement('input')
    var userText = document.createElement('span')
    var pwdText = document.createElement('span')
    var button = document.createElement('button')

    userInput.className = 'user-input'
    quizContent.className = "quiz-container"
    title.textContent = 'Cadastre-se'
    userText.textContent = 'Usuário'
    pwdText.textContent = 'Senha'
    pwdInput.className = 'user-input'
    pwdInput.type = 'password'
    button.className = 'quiz-button'
    button.textContent = "Entrar"

    noticiasDiv.style.margin = "0"
    noticiasDiv.style.marginBottom = "10rem"
    noticiasDiv.appendChild(quizContent);
    quizContent.appendChild(formulario)
    formulario.appendChild(title)
    formulario.appendChild(userText)
    formulario.appendChild(userInput)
    formulario.appendChild(pwdText)
    formulario.appendChild(pwdInput)
    formulario.appendChild(button)


    button.addEventListener("click", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Verifica se os campos estão vazios
        if (userInput.value.trim() === "" || pwdInput.value.trim() === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            // Salva os valores no localStorage
            localStorage.setItem("usuario", userInput.value);
            localStorage.setItem("senha", pwdInput.value);

            // Redireciona para quiz.html
            window.location.href = "warning.html";
        }
    })

    quizLink.addEventListener('click', function(){
        window.open("./index.html","_self");
    })
    
});
