async function loadSidebarOptions() {
    const options = await fetch("../../data/sidebar-options.json")
    const sidebar = document.getElementById("side_items")
    const pathname = window.location.pathname

    options.json().then(res => {
        res.forEach(option => {
            let isActive = option.route == pathname

            sidebar.innerHTML += `
                <li class="home-icon ${isActive && ("active-sidebar-icon " + option.color)}">
                    <a href="${option.route}">
                        <i class="${option.icon} " aria-hidden="true"></i>
                        <div class="home-icon-name">
                        ${option.name}
                        </div>
                    </a>
                </li>
            `
        })
    })

}

const btenMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
    if (event.type === 'touchstart') {
        event.preventDefault()
    }
    const nav = document.getElementById('sidebar')
    nav.classList.toggle('active')
}

btenMobile.addEventListener('click', toggleMenu)
btenMobile.addEventListener('touchstart', toggleMenu)

function main() {
    loadSidebarOptions()
}

main()