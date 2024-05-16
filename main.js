let blocos = document.querySelectorAll("td");
let msg = document.querySelector("p");
let reset = document.querySelector("button");
let jogada = "o";

blocos.forEach(bloco => {
    bloco.addEventListener('click', event => {
        if (bloco.innerText == "") {
            bloco.innerText = jogada;

            if (jogada == "o") {
                jogada = "x"
            }
            else {
                jogada = "o"
            }
            msg.innerText = `Próximo a jogar:${jogada}`;
            verificarGanhador();
        }
    })
})

reset.addEventListener('click', event => {
    blocos.forEach(bloco => {
        bloco.innerText = ""
        msg.innerText = `Próximo a jogar: ${jogada}`;
    })
});


function verificarGanhador() {
    let empate = true;

    if (
        (blocos[0].innerText != "" && blocos[0].innerText == blocos[1].innerText && blocos[0].innerText == blocos[2].innerText) ||
        (blocos[3].innerText != "" && blocos[3].innerText == blocos[4].innerText && blocos[3].innerText == blocos[5].innerText) ||
        (blocos[6].innerText != "" && blocos[6].innerText == blocos[7].innerText && blocos[6].innerText == blocos[8].innerText) ||

        // Conferindo através de colunas

        (blocos[0].innerText != "" && blocos[0].innerText == blocos[3].innerText && blocos[0].innerText == blocos[6].innerText) ||
        (blocos[1].innerText != "" && blocos[1].innerText == blocos[4].innerText && blocos[1].innerText == blocos[7].innerText) ||
        (blocos[2].innerText != "" && blocos[2].innerText == blocos[5].innerText && blocos[2].innerText == blocos[8].innerText) ||

        (blocos[0].innerText != "" && blocos[0].innerText == blocos[4].innerText && blocos[0].innerText == blocos[8].innerText) ||
        (blocos[2].innerText != "" && blocos[2].innerText == blocos[4].innerText && blocos[2].innerText == blocos[6].innerText)) {
        msg.innerHTML = "<h1>Vitória</h1>"
        empate = false;

    }


    if (empate) {
        let blocosPreenchidos = true;
        for (let i = 0; i < blocos.length; i++) {
            if (blocos[i].innerText == "") {
                blocosPreenchidos = false;
                break;
            }
        }
        if (blocosPreenchidos) {
            msg.innerHTML = "<h1> Deu velha! </h1>";
        }
    }
}

