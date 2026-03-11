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