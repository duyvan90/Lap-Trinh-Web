document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // JS cho Masonry (Để bố cục trông đẹp hơn)
    // Lưu ý: Để có Masonry hoàn hảo, thường cần thư viện như Masonry.js
    // Đoạn này chỉ để tạo sự khác biệt về chiều cao cho demo
    const projectCards = document.querySelectorAll('.project-card-new');
    projectCards.forEach((card, index) => {
        if (index === 0) card.classList.add('tall');
        if (index === 2) card.classList.add('wide');
        if (index === 4) card.classList.add('tall');
    });
});