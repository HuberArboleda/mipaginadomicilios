document.addEventListener('DOMContentLoaded', () => {
    const btnEmpezar = document.getElementById('btn-empezar');

    btnEmpezar.addEventListener('click', () => {
        alert('¡Gracias por tu interés en Midomicilioya.com! Pronto te contactaremos.');
    });

    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
