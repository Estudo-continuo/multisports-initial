var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

async function loadDestaqueOptions() {
    const options = await fetch("../../data/futebol/destaque_soccer.json")
    const destaque = document.getElementById("context")

    const destaqueData = options.json().then(res => {

        destaque.innerHTML = `
            <img class="photo" src="${res[0].img}" alt="${res[0].name}" width="20px">
            <div class="content_stats">
                <p class="name">${res[0].name}</p>
                <div class="icon_p">
                    <p class="stats"><i id="icon" class="fa-solid fa-bolt"></i>${res[0].why}</p>
                </div>
            </div>
        `

        return res
    })

    return destaqueData
}

function carrousel(i, data) {
    const destaque = document.getElementById("context")

    let option = data[i]

    destaque.innerHTML = `
    <img class="photo" src="${option.img}" alt="${option.name}" width="20px">
    <div class="content_stats">
        <p class="name">${option.name}</p>
        <div class="icon_p">
            <p class="stats"><i id="icon" class="fa-solid fa-bolt"></i>${option.why}</p>
        </div>
    </div>
    `
}


function leftChange(num, data) {
    let newIndex = num - 1

    if (num <= 0) {
        newIndex = data.length - 1
    }

    carrousel(newIndex, data)
    return newIndex

}

function rightChange(num, data) {
    let newIndex = num + 1

    if (newIndex >= data.length) {
        newIndex = 0
    }

    carrousel(newIndex, data)
    return newIndex

}

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

async function loadMenuOptions() {

    const options = await fetch("../../data/futebol/menu_opcoes.json")
    const local = document.getElementById("menu-opcoes-button-position")

    options.json().then(res => {
        res.forEach(option => {


        local.innerHTML = local.innerHTML + `
            <button class="menu-opcoes-button ${option.border}">${option.name}</button>
        `
        })
    })
}

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
                    <div class="position_size">
                        <img class="jogos_dados_club_img" src="${option.home.img}" alt="${option.home.name}">
                        <p class="jogos_dados_write">${option.home.name}</p>
                    </div>    
                </div>
                    <p class="jogos_dados_vs">vs</p>
                <div class="jogos_dados_club">
                    <div class="position_size">
                        <img class="jogos_dados_club_img" src="${option.away.img}" alt="${option.away.name} F.C">
                        <p class="jogos_dados_write">${option.away.name}</p>
                    </div>        
                </div>
                    <div class="position_size">
                        <p class="jogos_dados_write"><i class="fa-regular fa-clock"></i> ${option.time}</p>
                        <a href="${option.linkLocal}" class="jogos_dados_write"><i class="fa-solid fa-location-dot"></i> ${option.local}</a>
                    </div>
                    <div></div>
                    <div class="position_size">
                        <button onClick="addFavorite(value)" value="${option.reference}" class="icon-heart-${heart}"><i class="fa-solid fa-heart"></i></button>
                        <a class="jogos_dados_viewmore" href="#">View more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>            
            </div>

        </section>
            `
        })
    })
}

async function main() {
    const dataCarrousel = await loadDestaqueOptions()

    let inicialIndex = 0

    const leftArrow = document.getElementById("arrow_left")
    const rightArrow = document.getElementById("arrow_right")

    leftArrow.addEventListener(`click`, () => inicialIndex = leftChange(inicialIndex, dataCarrousel))
    rightArrow.addEventListener(`click`, () => inicialIndex = rightChange(inicialIndex, dataCarrousel))

    loadCardApresentacaoOptions()
    loadFilterOptions()
    loadMenuOptions()

}

main()