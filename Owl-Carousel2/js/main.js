
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    // items: 1 თუ დავწერთ ერთ ცალს, მთლიან ეკრანზე გამოვა მხოლოდ ერთი
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})