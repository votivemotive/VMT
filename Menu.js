// mobile nav toggle (all pages use same id/class names)
document.addEventListener('DOMContentLoaded', function(){
  // mobile menu: toggles any nav present
  var toggles = document.querySelectorAll('.menu-toggle');
  toggles.forEach(function(btn){
    btn.addEventListener('click', function(){
      var nav = btn.parentElement.querySelector('.main-nav');
      if(nav) nav.classList.toggle('open');
    });
  });

  // Swiper - Collections slider
  if(window.Swiper){
    new Swiper('.collections-swiper', {
      loop: true,
      slidesPerView: 1.1,
      spaceBetween: 18,
      breakpoints: {640:{slidesPerView:2.2}, 992:{slidesPerView:3.2}},
      pagination:{el:'.collections-swiper .swiper-pagination', clickable:true}
    });

    new Swiper('.test-swiper', {
      loop:true,
      slidesPerView:1.05,
      spaceBetween:14,
      breakpoints:{640:{slidesPerView:1.6}, 992:{slidesPerView:2.6}},
      pagination:{el:'.test-swiper .swiper-pagination', clickable:true}
    });
  }

  // newsletter form
  var nf = document.getElementById('newsletterForm');
  if(nf){
    nf.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks — subscribed!');
      nf.reset();
    });
  }

  // contact & b2b forms: simple handler (mailto fallback)
  var b2b = document.getElementById('b2bForm');
  if(b2b){
    b2b.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you — your B2B inquiry has been submitted. We will contact you shortly.');
      b2b.reset();
    });
  }
  var cf = document.getElementById('contactForm');
  if(cf){
    cf.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Message sent — we will respond soon.');
      cf.reset();
    });
  }
});
// Auto slider – duplicate items for infinite loop
const track = document.querySelector('.brand-track');
const clone = track.innerHTML;
track.innerHTML += clone;

<script>
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[n].classList.add("active");
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

setInterval(nextSlide, 3000);

showSlide(slideIndex);
</script>

