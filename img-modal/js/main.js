
let imgs = document.querySelectorAll(".cont .col img")

imgs.forEach(img => {
    img.addEventListener("click", el => {
        modalImg.src = el.target.src
        modal.style.display = 'flex'
    })
})

close_icon.addEventListener("click", () => {
    modal.style.display = 'none'
})

modal.addEventListener("click", el => {
    if(el.target === modal)
        modal.style.display = 'none'
})