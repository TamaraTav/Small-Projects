let slides = document.querySelectorAll(".slides img")


function nextSlide() {
    let activeSlide = document.querySelector(".slides .active")
    activeSlide.classList.remove("active")
    if(activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add("active")
    } else {
        slides[0].classList.add("active")
    }
}

function prevSlide() {
    let activeSlide = document.querySelector(".slides .active")
    activeSlide.classList.remove("active")
    if(activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add("active")
    } else {
        slides[slides.length - 1].classList.add("active")
    }
}

function sliderAutoPlay() {
    setInterval(()=> {
        nextSlide()
    },2000)
}

sliderAutoPlay()