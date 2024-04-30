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
                    </a>
                </li>
            `
        })
    })

}

function main() {
    loadSidebarOptions()
}

main()