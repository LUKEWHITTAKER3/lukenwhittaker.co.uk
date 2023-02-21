const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        console.log(e);
        if (e.isIntersecting) {
            e.target.classList.add('show');
        } else {
            e.target.classList.remove('show');
        }
    });
})

const scrollerSections = document.querySelectorAll('.hidden');
scrollerSections.forEach((s) => sectionObserver.observe(s));


