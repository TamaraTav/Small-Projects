

function selectCategory(cat) {
    //cat ნიშნავს კატეგორიას
    let cards = document.querySelectorAll(".news .card")

    cards.forEach(card => {
        if(card.classList.contains(cat)) {
            card.style.display = 'unset'
        } else {
            card.style.display = 'none'
        }
    })
}