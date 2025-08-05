
if(localStorage.darkMode && Number(localStorage.darkMode)) {
    switchDarkMode()
}

function switchDarkMode() {
    document.body.classList.toggle("dark")
    localStorage.darkMode = document.body.classList.contains("dark") ? 1 : 0
}