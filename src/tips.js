const quizLink = document.getElementById("quiz");
const noticiasLink = document.getElementById("noticias")
const tipsLink = document.getElementById("dicas")
const noticiasDiv = document.getElementById("newscontainer");

tipsLink.addEventListener("click", function() {
    window.location.href = "../tips.html"
})


quizLink.addEventListener("click", function(){
    if (quizLink.textContent === "Notícias"){
        exibirNoticias()
    }
    else{
        exibirQuiz()
    }
});


function exibirQuiz(){
    noticiasDiv.innerHTML = "";
    quizLink.textContent = "Notícias"

    var formulario = document.createElement('form')
    
    var quizContent = document.createElement("div")
    var title = document.createElement('h2')
    var userInput = document.createElement('input')
    var pwdInput = document.createElement('input')
    var userText = document.createElement('span')
    var pwdText = document.createElement('span')
    var button = document.createElement('button')
    var registerText = document.createElement('h1')

    userInput.className = 'user-input'
    quizContent.className = "quiz-container"
    title.textContent = 'Cadastre-se'
    userText.textContent = 'Usuário'
    pwdText.textContent = 'Senha'
    pwdInput.className = 'user-input'
    pwdInput.type = 'password'
    button.className = 'quiz-button'
    button.textContent = "Entrar"
    registerText.textContent = "Registre-se para ter acesso ao quiz"

    noticiasDiv.style.margin = "0"
    noticiasDiv.style.marginBottom = "10rem"
    noticiasDiv.appendChild(registerText)
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
}

function exibirNoticias(){
    quizLink.textContent = "Quiz"
    noticiasDiv.innerHTML = ""
    noticiasDiv.innerHTML = `
    <div class="news-container" id="newscontainer">
            <div class="news">
                <div class="news-image">
                    <img src="media/2023-10-01_17-17.png" alt="">
                </div>
                <div class="news-content">
                    <h2>ITFORUM</h2>
                    <h3>Phishing fez empresas brasileiras perderem dinheiro em 2022</h3>
                    <p>E-mail continua sendo o método de ataque preferido dos criminosos, revela estudo da Proofpoint</p>
                    <a target="_blank" href="https://itforum.com.br/noticias/phishing-empresas-brasileiras-dinheiro/">https://itforum.com.br/noticias/phishing-empresas-brasileiras-dinheiro/</a>
                </div>
            </div>
            <div class="news">
                <div class="news-image">
                    <img src="https://www.hardware.com.br/wp-content/uploads/static/wp/2023/03/16/Captura-de-tela-2023-03-03-140152.png" alt="">
                </div>
                <div class="news-content">
                    <h2>HARDWARE.COM.BR</h2>
                    <h3>Brasil foi o país com o maior número de ataques de
                        phishing por WhatsApp em 2022</h3>
                    <p>No último ano, o Brasil foi o país mais atacado por phishing pelo WhatsApp, com mais de 76 mil
                        tentativas de fraudes.</p>
                    <a target="_blank" href="https://itforum.com.br/noticias/phishing-empresas-brasileiras-dinheiro/">https://itforum.com.br/noticias/phishing-empresas-brasileiras-dinheiro/</a>
                </div>
            </div>
            <div class="news">
                <div class="news-image">
                    <img src="https://www.contabeis.com.br/assets/img/news/novo-golpe-cibernetico-atraves-de-phishing.webp" alt="">
                </div>
                <div class="news-content">
                    <h2>CONTÁBEIS</h2>
                    <h3>Novo golpe cibernético através de phishing</h3>
                    <p>Neste artigo, especialista alerta novo golpe em sites de reservas de hotéis e cuidados a serem
                        tomados.</p>
                    <a target="_blank" href="https://itforum.com.br/noticias/phishing-empresas-brasileiras-dinheiro/">https://itforum.com.br/noticias/phishing-empresas-brasileiras-dinheiro/</a>
                </div>
            </div>
        </div>
    `
}