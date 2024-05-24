async function loadFilterOptions() {
    const options = await fetch("../../data/futebol/filter.json")
    const filter = document.getElementById("jogos_position")

    options.json().then(res => {

        res.forEach(option => {

            if (option.isFavorite == false) {
                heart = "grey"
            } else {
                heart = "red"
            }

            filter.innerHTML += `
        <section class="jogos">

            <div class="jogos_dados">
                <div class="jogos_dados_club">
                    <img class="jogos_dados_club_img" src="${option.home.img}" alt="${option.home.name}">
                    <p class="jogos_dados_write">${option.home.name}</p>
                </div>
                <p class="jogos_dados_vs">vs</p>
                <div class="jogos_dados_club">
                    <img class="jogos_dados_club_img" src="${option.away.img}" alt="${option.away.name} F.C">
                    <p class="jogos_dados_write">${option.away.name}</p>
                </div>
                <p class="jogos_dados_write"><i class="fa-regular fa-clock"></i> ${option.time}</p>
                <a href="${option.linkLocal}" class="jogos_dados_write"><i class="fa-solid fa-location-dot"></i> ${option.local}</a>
                <button onClick="addFavorite(value)" value="${option.reference}" class="icon-heart-${heart}"><i class="fa-solid fa-heart"></i></button>
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