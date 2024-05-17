async function loadDestaqueOptions() {
    const options = await fetch("../../data/futebol/destaque_soccer.json")
    const destaque = document.getElementById("context")


    options.json().then(res => {
        console.log(res)
            destaque.innerHTML = `
            <img class="photo" src="${res[0].img}" alt="${res[0].name}" width="20px">
            <div class="content_stats">
                <p class="name">${res[0].name}</p>
                <div class="icon_p">
                    <p class="stats"><i id="icon" class="fa-solid fa-bolt"></i>${res[0].why}</p>
                </div>
            </div>
            `
    })
}

async function carrousel(i){

    if (i < 0) {
        i = 3
    } else if (i == 4) {
        i = 0
    }

    const options = await fetch("../../data/futebol/destaque_soccer.json")
    const destaque = document.getElementById("context")

    options.json().then(res => {
        let option = res[i]

        destaque.innerHTML = `
        <img class="photo" src="${option.img}" alt="${option.name}" width="20px">
        <div class="content_stats">
            <p class="name">${option.name}</p>
            <div class="icon_p">
                <p class="stats"><i id="icon" class="fa-solid fa-bolt"></i>${option.why}</p>
            </div>
        </div>
        `
    })
}


function leftChange(num){

    if (num < 0) {
        num = 3
    } else if (num == 4) {
        num = 0
    }

    carrousel(num - 1)
    return num - 1

}

function rightChange(num){

    if (num < 0) {
        num = 3
    } else if (num == 4) {
        num = 0
    }

    carrousel(num + 1)
    return num + 1

}

function main() {
    loadDestaqueOptions()

    let inicialIndex = 0

    const leftArrow = document.getElementById("arrow_left")
    const rightArrow = document.getElementById("arrow_right")

    leftArrow.addEventListener(`click`, () => inicialIndex = leftChange(inicialIndex))
    rightArrow.addEventListener(`click`, () => inicialIndex = rightChange(inicialIndex))

}

main()