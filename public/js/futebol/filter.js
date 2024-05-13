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
                    <img class="jogos_dados_club_img" src="${option.imgClubHouse}" alt="${option.nameClubHouse}">
                    <p class="jogos_dados_write">${option.nameClubHouse}</p>
                </div>
                <p class="jogos_dados_vs">vs</p>
                <div class="jogos_dados_club">
                    <img class="jogos_dados_club_img" src="${option.imgClubVisited}" alt="${option.nameClubVisited} F.C">
                    <p class="jogos_dados_write">${option.nameClubVisited}</p>
                </div>
                <p class="jogos_dados_write"><i class="fa-regular fa-clock"></i> ${option.time}</p>
                <p class="jogos_dados_write"><i class="fa-solid fa-location-dot"></i> ${option.local}</p>
                <button onClick="addFavorite(value)" value="${option.reference}" class="icon-heart-${heart}"><i class="fa-solid fa-heart"></i></button>
                <a class="jogos_dados_viewmore" href="#">View more <i class="fa-solid fa-arrow-right"></i></a>
            </div>

        </section>
            `
        })
    })
}

// async function addFavorite(value) {
//     const referencia = await fetch("../../data/futebol/filter.json")

//     referencia.json().then(resposta => {
//         console.log(resposta[value].isFavorite)
//         let alterar = resposta[value].isFavorite
//         if (alterar == true) {
//             alterar = false
//         } else {
//             alterar = true 
//         }
//     })
// }



function main() {
    loadFilterOptions()
}

main()