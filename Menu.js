// Logo upload preview (shared on all pages)
const logoBtn = document.getElementById('logoBtn');
const logoInput = document.getElementById('logoInput');
const logoImg = document.getElementById('logoImg');
if (logoBtn && logoInput && logoImg) {
  logoBtn.addEventListener('click', () => logoInput.click());
  logoInput.addEventListener('change', e => {
    const f = e.target.files[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    logoImg.src = url;
  });
}

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Footer year
document.getElementById('year')?.textContent = new Date().getFullYear();

// Demo form handlers
function submitQuote(e) {
  e.preventDefault();
  alert('Quote request received (demo). We will contact you shortly.');
  e.target.reset?.();
}
function submitContact(e) {
  e.preventDefault();
  alert('Message received (demo). Thank you!');
  e.target.reset?.();
}

// Product page dynamic content by query param
function parseQuery() {
  const q = new URLSearchParams(location.search);
  return Object.fromEntries(q.entries());
}
if (location.pathname.endsWith('product.html')) {
  const q = parseQuery();
  const sku = q.sku || 'shampoo';
  const mapping = {
    shampoo: { title: '25ml Shampoo — Hotel Size', img: 'assets/images/p1.jpg', desc: 'Premium hotel shampoo in 25ml bottle.' },
    conditioner: { title: '25ml Conditioner', img: 'assets/images/p2.jpg', desc: 'Nourishing conditioner for guest rooms.' },
    dental: { title: 'Sachet Toothpaste & Travel Brush', img: 'assets/images/p3.jpg', desc: 'Herbal toothpaste sachets for travel kits.' },
    spasalts: { title: 'Spa Bath Salts', img: 'assets/images/p4.jpg', desc: 'Relaxing spa salts for premium experiences.' }
  };
  const product = mapping[sku] || mapping['shampoo'];
  document.getElementById('pdTitle') && (document.getElementById('pdTitle').textContent = product.title);
  document.getElementById('pdDesc') && (document.getElementById('pdDesc').textContent = product.desc);
  document.getElementById('pdImage') && (document.getElementById('pdImage').src = product.img);
}

// GSAP micro-animations (safe-guard if gsap loaded)
if (window.gsap) {
  gsap.from('.hero-title', { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out' });
  gsap.from('.lead', { y: 18, opacity: 0, duration: 0.9, delay: 0.12 });
  gsap.from('.actions .btn', { y: 12, opacity: 0, stagger: 0.12, duration: 0.7 });
  // animate each card on load
  gsap.utils.toArray('.card').forEach((el, i) => {
    gsap.from(el, { y: 12, opacity: 0, duration: 0.8, delay: 0.06 * i, ease: 'power2.out' });
  });
}
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
<script>
const heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  autoplay: { delay: 5000, disableOnInteraction: false },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  pagination: { el: '.swiper-pagination', clickable: true },
  effect: 'fade',
});
</script>
