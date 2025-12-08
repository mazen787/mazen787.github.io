// =========================================
// Scroll Reveal Animation (حركة العناصر عند الظهور)
// يجب وضعه خارج DOMContentLoaded ليبدأ العمل فوراً
// =========================================
ScrollReveal({ 
    reset: true,      // true: الحركة تتعاد كل ما تطلع وتنزل
    distance: '80px', // المسافة اللي العنصر بيتحركها
    duration: 2000,   // وقت الحركة (ثانيتين)
    delay: 200        // تأخير بسيط
});

// هنا بنحدد كل عنصر هيجي منين
ScrollReveal().reveal('.hero-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.hero-image, .services-container, .portfolio-card, .contact-form, .stat', { origin: 'bottom' }); // تم تعديل Selector ليتناسب مع Projects
ScrollReveal().reveal('.hero-content h1, .about-img, .contact-info', { origin: 'left' }); // تم إضافة contact-info
ScrollReveal().reveal('.hero-content p, .about-content', { origin: 'right' });


document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. كود فلترة المشاريع (Portfolio Filter)
    // =========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const filterValue = button.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filterValue === 'all' || filterValue === category) {
                        item.style.display = 'block';
                        item.animate([
                            { transform: 'scale(0.5)', opacity: 0 },
                            { transform: 'scale(1)', opacity: 1 }
                        ], {
                            duration: 300,
                            fill: 'forwards'
                        });
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // =========================================
    // 2. كود تأثير القائمة العلوية عند السكرول
    // =========================================
    const navbar = document.querySelector('.navbar');
    
    if(navbar) { 
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // لما تنزل لتحت، الخلفية تبقى أغمق شوية وتعمل ظل
                navbar.style.background = '#0a0a0a';
                navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
            } else {
                // لما ترجع فوق، ترجع للون الطبيعي
                navbar.style.background = '#121212';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // =========================================
    // 3. كود الكتابة المتحركة (Typing Effect) - المعدل
    // =========================================
    if(document.querySelector('.welcome-text')) {
        var typed = new Typed('.welcome-text', {
            // هنا الجملتين اللي هيبدل بينهم
            strings: [
                'Welcome to my website, nice to meet you.', 
                'Data is the fuel, Analytics is the engine.'
            ], 
            typeSpeed: 40,    // سرعة الكتابة (أسرع قليلاً لتناسب الجمل الطويلة)
            backSpeed: 30,    // سرعة المسح
            backDelay: 2000,  // يستنى ثانيتين عشان الناس تلحق تقرأ
            loop: true,       // يعيد الكتابة باستمرار
            showCursor: true, 
            cursorChar: '|',
        });
    }

    // =========================================
// 3D Tilt Effect (تأثير الحركة الثلاثية الأبعاد)
// =========================================
VanillaTilt.init(document.querySelectorAll(".portfolio-card, .cert-card, .service-box"), {
    max: 15,       // أقصى درجة ميل (كل ما تقل الرقم الحركة تبقى أهدى)
    speed: 400,    // سرعة الحركة
    glare: true,   // يضيف لمعة خفيفة زي الزجاج
    "max-glare": 0.2, // قوة اللمعة
});

});