let accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
        let panel = this.nextElementSibling;

        if (panel.style.display === 'block') {
            panel.style.display = 'none';

            this.setAttribute('aria-expanded', 'false');
        }
        else {
            panel.style.display = 'block';

            this.setAttribute('aria-expanded', 'true');
        }
    });
});