// ====== OWL CAROUSEL
$(".owl-features").owlCarousel({
    autoplay: false,
    smartSpeed: 1500,
    margin: 20,
    stagePadding: 30,
    items: 1,
    dots: true,
    loop: false,
    nav : false,
});

$(".owl-vantages").owlCarousel({
    autoplay: false,
    smartSpeed: 1500,
    margin: 20,
    stagePadding: 30,
    items: 1,
    dots: true,
    loop: false,
    nav : false,
});

$(".owl-benefits").owlCarousel({
    autoplay: false,
    smartSpeed: 1500,
    margin: 20,
    stagePadding: 30,
    items: 1,
    dots: true,
    loop: false,
    nav : false,
    dotsData: true,
});

$(".owl-blog").owlCarousel({
    autoplay: false,
    smartSpeed: 1500,
    margin: 20,
    stagePadding: 30,
    items: 1,
    dots: false,
    loop: false,
    nav : false,
});

// ====== FOOTER TABS
const tabsButton = document.querySelectorAll('.tab-button')
const resourcesTabsButtons = document.querySelector('.resources-tabs-buttons')
const tabsContent = document.querySelectorAll('.tab-content')

for(let i = 0; i < tabsButton.length; i++) {
    tabsButton[i].addEventListener('click', function() {
        for(let i = 0; i < tabsContent.length; i++) {
            tabsContent[i].className = 'tab-content'
        }
        document.getElementById(this.dataset.id).className = 'tab-content active'

        for(let i = 0; i < tabsButton.length; i++) {
            tabsButton[i].className = 'tab-button'
        }
        this.className = 'tab-button active'

        if (tabsButton[0].classList.contains('active')) {
            resourcesTabsButtons.classList.add('left-marker')
            resourcesTabsButtons.classList.remove('right-marker')
        } else {
            resourcesTabsButtons.classList.add('right-marker')
            resourcesTabsButtons.classList.remove('left-marker')
        }
    })
}

// ====== FOOTER ACORDIONS
const footerListAccordion = document.querySelectorAll('.footer-list-accordion')

for(let i = 0; i < footerListAccordion.length; i++) {
    footerListAccordion[i].addEventListener('click', function() {
        for(let i = 0; i < footerListAccordion.length; i++) {
            footerListAccordion[i].classList.remove('active')
        }
        this.classList.add('active')
    })
}