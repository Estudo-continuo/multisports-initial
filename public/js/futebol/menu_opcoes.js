async function loadMenuOptions() {
    const options = await fetch("../../data/futebol/menu_opcoes.json")
    const local = document.getElementById("menu-opcoes-button-position")

    console.log(local)

    options.json().then(res => {

        console.log(res)

        local.innerHTML = `
            <button class="menu-opcoes-button${res[0].active}">Classificação</button>
            <button class="menu-opcoes-button${res[1].active}">Próximos jogos</button>
            <button class="menu-opcoes-button${res[2].active}">Últimos jogos</button>
            <button class="menu-opcoes-button${res[3].active}">Estatísticas</button>
            <button class="menu-opcoes-button${res[4].active}">Notícias</button>
        `
        })
}

function main() {
    loadMenuOptions()
}

main()