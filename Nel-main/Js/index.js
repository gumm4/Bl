const jogadores = document.querySelectorAll(".Jogador")

jogadores.forEach(jogador => {

    jogador.addEventListener("click", () => {

        const estaAtivo = jogador.classList.contains("ativo")

        jogadores.forEach(outro =>  {

            outro.classList.remove("ativo")

        })

        if(!estaAtivo){

            jogador.classList.add("ativo")

        }

    })

})

const Treinador = document.querySelectorAll(".tecnico")

    Treinador.forEach(tecnico => {

        tecnico.addEventListener("click", () =>{

            const estaLigado = tecnico.classList.contains("ativo")

            Treinador.forEach(outro => {

                outro.classList.remove("ativo")

            })

            if(!estaLigado) {

                tecnico.classList.add("ativo")

            }

        })

    })