function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if (html.classList.contains('light')) {
        img.setAttribute("src", "assets/avatar-light2.png")
        img.setAttribute("alt", "Foto de Kauê Sehnem normal(face) com óculos de sol, com camisa preta e fundo cinza claro")
    } else {
        img.setAttribute("src", "assets/avatar2.png")
        img.setAttribute("alt", "Foto de Kauê Sehnem normal(face), com camisa preta e fundo cinza claro")
    }
}

