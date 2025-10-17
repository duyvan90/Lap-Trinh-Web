// =======================================================
// CODE JAVASCRIPT ĐÃ PHÂN TÁCH - script.js
// =======================================================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) rotate(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .artwork-card, .mini-artwork').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px) rotate(5deg)'; 
    card.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    observer.observe(card);
});


function filterGallery() {
    const tabs = document.querySelectorAll('.tab-btn');
    const cards = document.querySelectorAll('.artwork-card');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 1. Loại bỏ trạng thái active của tất cả các nút và đặt lại
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 2. Lấy bộ lọc từ data-filter
            const filter = tab.getAttribute('data-filter');

            // 3. Lọc các thẻ
            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block'; 
                    // Reset animation để thẻ hiện ra lại
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(50px) rotate(5deg)';
                    observer.observe(card); 
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}


function setupNavbarGalleryFilter() {
    const navFilterLinks = document.querySelectorAll('.dropdown-content a[data-filter-nav]');
    const gallerySection = document.getElementById('gallery');
    
    navFilterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            // 1. Smooth Scroll đến phần Gallery
            if (gallerySection) {
                gallerySection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // 2. Lấy bộ lọc cần kích hoạt
            const filterToActivate = this.getAttribute('data-filter-nav');
            
            // 3. Tìm và click vào nút tab tương ứng trong Gallery
            const targetTab = document.querySelector(`.gallery-tabs .tab-btn[data-filter="${filterToActivate}"]`);
            
            if (targetTab) {
                targetTab.click();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    filterGallery();
    setupNavbarGalleryFilter();
});