const herois = [{id: 1, nome: "Spider-man", pontosDePoder: 90}]

const viloes = [{id: 1, nome: "Coringa", pontosDePoder: 80}]

const postHeroi = (req, res) => {
    const nome = req.body.nome
    const pontosDePoder = req.body.pontosDePoder

    if (nome && pontosDePoder){
        const idMaximo = herois.reduce((maior, atual) => atual.id > maior ? atual.id : maior, -1)
        const novoHeroi = { id: idMaximo + 1, nome, pontosDePoder }
        herois.push(novoHeroi)
        res.status(201).send({ mensagem: "Heroi pronto pra batalha!" })
    } else {
        res.status(400).send({ mensagem: "Favor informar nome e pontos de poder" })
    }

}

const postVilao = (req, res) => {
    const nome = req.body.nome
    const pontosDePoder = req.body.pontosDePoder

    if (nome && pontosDePoder){
        const idMaximo = viloes.reduce((maior, atual) => atual.id > maior ? atual.id : maior, -1)
        const novoVilao = { id: idMaximo + 1, nome, pontosDePoder }
        viloes.push(novoVilao)
        res.status(201).send({ mensagem: "Vilão pronto pra batalha!" })
    } else {
        res.status(400).send({ mensagem: "Favor informar nome e pontos de poder" })
    }
}

const postHeroiVilao = (req, res) => {
    const {idHeroi, idVilao} = req.body

    const heroi = herois.find( heroi => heroi.id === idHeroi)
    const vilao = viloes.find( vilao => vilao.id === idVilao)

    if(!idHeroi || !idVilao) {
        res.status(404).send({ error: 'Heroi ou vilão não encontrado' })
        return
    }

    if(heroi.pontosDePoder > vilao.pontosDePoder){
        res.status(201).send({ mensagem: `${heroi.nome} venceu ${vilao.nome}!` })

    } else if(heroi.pontosDePoder < vilao.pontosDePoder){
        res.status(201).send({ mensagem: `${vilao.nome} venceu ${heroi.nome}!` })

    } else if(heroi.pontosDePoder == vilao.pontosDePoder){
        res.status(201).send({ mensagem: `Houve um empate! E agora quem podera nos ajudar?` })
        
    } else {
        res.status(400).send({ mensagem: "OOOPS Algo deu errado" })
        return
    }

}

export {postHeroi, postVilao, postHeroiVilao}
