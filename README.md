# API_herois_vs_viloes

API desenvolvida com Node.js usando express.

Um sistema de gerenciamento de batalha de heróis, contendo 2 Arrays: 1 para heróis e 1 para vilões, onde tanto os heróis quanto os vilões possuem as mesmas informações (id, nome e pontosDePoder).
Um endpoint batalhar que recebe o id do herói e o id do vilão e retorna a batalha correspondente, definindo o vencedor pelos pontos de poder.
Exemplo: { batalha: "Thanos venceu Spider-man!”}
API dividida em arquivos de routes, controllers, server e contem os endpoints a seguir:
/heroi (POST) – Cadastrar um herói
/vilao (POST) – Cadastrar um vilão
/batalha (POST) – Receber id_heroi e id_vilao e retornar o vencedor
