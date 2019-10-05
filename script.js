let accordions = document.querySelectorAll('.accordion');
let expanders = document.querySelectorAll('.expander');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
        let panel = this.nextElementSibling;

        if (panel.style.display === 'block') {
            panel.style.display = 'none';

            this.setAttribute('aria-expanded', 'false');

            this.firstElementChild.classList.remove('up');
            this.firstElementChild.classList.add('down');
        }
        else {
            panel.style.display = 'block';

            this.setAttribute('aria-expanded', 'true');

            this.firstElementChild.classList.add('up');
        }
    });
});