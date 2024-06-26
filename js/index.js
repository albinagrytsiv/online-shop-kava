function init() {
    import('./about_us_section.js');
    import('./index.section-intro.js');
    import('./contacts_us.section.js');
    import('./shop_section.js');
    import('./common.nav.js');
    import('./index.section-knowledge.js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});