async function loadFilterOptions() {
    const options = await fetch("../../data/futebol/filter.json")
    const filter = document.getElementById("jogos_position")

    options.json().then(res => {
        res.forEach(option => {
            filter.innerHTML += `
        <section class="jogos">

            <div class="jogos_dados">
                <div class="jogos_dados_club">
                    <img class="jogos_dados_club_img" src="${option.img1}" alt="${option.name1}">
                    <p class="jogos_dados_write">${option.name1}</p>
                </div>
                <p class="jogos_dados_vs">vs</p>
                <div class="jogos_dados_club">
                    <img class="jogos_dados_club_img" src="${option.img2}" alt="${option.name2} F.C">
                    <p class="jogos_dados_write">${option.name2}</p>
                </div>
                <p class="jogos_dados_write"><i class="fa-regular fa-clock"></i> ${option.time}</p>
                <p class="jogos_dados_write"><i class="fa-solid fa-location-dot"></i> ${option.local}</p>
                <button class="icon-heart-${option.heart}"><i class="fa-solid fa-heart"></i></button>
                <a class="jogos_dados_viewmore" href="#">View more <i class="fa-solid fa-arrow-right"></i></a>
            </div>

        </section>
            `
        })
    })
}

function main() {
    loadFilterOptions()
}

main()