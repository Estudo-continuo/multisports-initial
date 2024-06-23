async function loadHome() {
    const sports = await fetch("../../data/home.json")
    const home = document.getElementById("main-organize-content")

    const listOfSports = sports.json().then(res => {
        home.innerHTML = `
            <div id="organize-content-home" class="organize-content ${res[0].color}">
                <button id="btnBack" class="button-back-next">BACK</button>

                <div class="organize-text-img">
                    <div class="position-text">
                        <h1 class="title">Bem vindos ao MultiSports</h1>
                        <h2 class="descrition">Clique em ver mais para saber tudo e mais um pouco sobre os jogos da rodada e sobre ${res[2].sport}.<h2>
                        <a class="see-more ${res[0].color}" href="${res[0].route}">Ver mais</a>
                    </div>
                    <div class="position-img">
                        <img class="design-img" src="${res[0].photo}" alt="Psg team">
                    </div>
                </div>
                
                <button id="btnNext" class="button-back-next">NEXT</button>
            </div>
        `
        return res
    })
    return listOfSports
}

function changeTema(indexValue, list) {
    const home = document.getElementById("main-organize-content")
    
    let res = list[indexValue]
    
    home.innerHTML = `
        <div id="organize-content-home" class="organize-content ${res.color}">
            <button id="btnBack" class="button-back-next">BACK</button>

            <div class="organize-text-img">
                <div class="position-text">
                    <h1 class="title">Bem vindos ao MultiSports</h1>
                    <h2 class="descrition">Clique em ver mais para saber tudo e mais um pouco sobre os jogos da rodada e sobre ${res.sport}.<h2>
                    <a class="see-more ${res.color}" href="${res.route}">Ver mais</a>
                </div>
                <div class="position-img">
                    <img class="design-img" src="${res.photo}" alt="Psg team">
                </div>
            </div>
            
            <button id="btnNext" class="button-back-next">NEXT</button>
        </div>
    `
}

function changeBtnBack(num, list) {
    let index = num - 1

    console.log(index)

    if (index == -1) {
        index = list.length - 1
    }
    changeTema(index, list)
    return index
}

function changeBtnNext(num, list) {
    let index = num + 1

    console.log(index)

    if (index >= list.length) {
        index = 0
    }
    changeTema(index, list)
    return index
}

async function main() {
    const change = await loadHome()

    let indexValue = 0

    const btnBack = document.getElementById("btnBack")
    const btnNext = document.getElementById("btnNext")

    btnBack.addEventListener('click', () => indexValue = changeBtnBack(indexValue, change))
    btnNext.addEventListener('click', () => indexValue = changeBtnNext(indexValue, change))
}

main()