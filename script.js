function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = window.prompt("Digite a hora desejada") //data.getHours()
    msg.innerText = `Agora são ${hora} horas!`
    if (hora > 0 && hora < 12) {
        foto.src = "manha.png"
        document.body.style.background = "#ffd552"
    } else if (hora > 12 && hora < 18) {
        foto.src = "tarde.png"
        document.body.style.background = "#ba2b00"
    } else {
        foto.src = "noite.png"
        document.body.style.background = "#1C1C1C"
    }
}


