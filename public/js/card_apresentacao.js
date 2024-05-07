async function loadCardApresentacaoOptions() {
    const options = await fetch("../../data/card_apresentacao.json")
    const card = document.getElementById("section_p")


    options.json().then(res => {

        let visual = parseInt(Math.random() * res.length)

        card.innerHTML = `
        <p id="section_p1"><i class="fa-regular fa-futbol"></i>  Curiosidades do Futebol</p>
        <p id="section_p2">${res[visual].sentence}</p>
        <p id="section_p3">${res[visual].name}</p>
        `
        })
}

function main() {
    loadCardApresentacaoOptions()
}

main()