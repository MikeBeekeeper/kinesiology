const backToTopBtn = document.querySelector('.back-to-top')

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 200) {
        backToTopBtn.classList.add('active')
    } else {
        backToTopBtn.classList.remove('active')
    }
})

backToTopBtn.addEventListener('click', ()=>{
    window.scrollTo(0,0)
})

