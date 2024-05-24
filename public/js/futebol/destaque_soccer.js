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

async function main() {
    const dataCarrousel = await loadDestaqueOptions()

    let inicialIndex = 0

    const leftArrow = document.getElementById("arrow_left")
    const rightArrow = document.getElementById("arrow_right")

    leftArrow.addEventListener(`click`, () => inicialIndex = leftChange(inicialIndex, dataCarrousel))
    rightArrow.addEventListener(`click`, () => inicialIndex = rightChange(inicialIndex, dataCarrousel))

}

main()