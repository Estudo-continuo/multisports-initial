async function loadCardApresentacaoOptions() {
    const options = await fetch("../../data/futebol/card_apresentacao.json")
    const card = document.getElementById("card_apresentacao_content_p")


    options.json().then(res => {

        let visual = parseInt(Math.random() * res.length)

        card.innerHTML = `
        <p class="card_apresentacao_content_p1"><i class="fa-regular fa-futbol"></i>  Curiosidades do Futebol</p>
        <p class="card_apresentacao_content_p2">${res[visual].sentence}</p>
        <p class="card_apresentacao_content_p3">${res[visual].name}</p>
        `
        })
}

function main() {
    loadCardApresentacaoOptions()
}

main()