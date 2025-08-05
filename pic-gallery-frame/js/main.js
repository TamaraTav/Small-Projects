

const galImags = document.querySelectorAll(".imgs img")

galImags.forEach(el => {
    el.addEventListener("click", param => {
        coverImg.src = param.target.src
        document.querySelector(".imgs img.active").classList.remove("active")
        param.target.classList.add("active")
    })
})