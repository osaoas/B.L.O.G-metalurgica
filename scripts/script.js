const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const btn = document.getElementById("btnMenu")
if (window.innerWidth > 768) {

  let lastScrollTop = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });


  gsap.to('.titleSlide', {
    x: -200,
    opacity: 0,
    scrollTrigger: {
      trigger: 'h1',
      start: 'center center',
      end: 'bottom top',
      scrub: true,

    }
  });



  gsap.to('.textSlide', {
    x: -150,
    opacity: 0,
    scrollTrigger: {
      trigger: 'h1',
      start: 'center center',
      end: 'bottom top',
      scrub: true,

    }
  });

  gsap.to('.topContent .txtContent h2', {
    x: 100,
    opacity: 1,
    scrollTrigger: {
      trigger: '#sobre',
      start: 'top bottom',
      end: 'center center',
      scrub: true,
    }
  });

  gsap.to('.topContent .txtContent p', {
    x: -50,
    opacity: 1,
    scrollTrigger: {
      trigger: '#sobre',
      start: 'top center',
      end: 'center center',
      scrub: true,
    }
  });

  gsap.to('.service-card:not(.alt)', {
    x: -50,
    opacity: 1,
    scrollTrigger: {
      trigger: '#servicos',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    }
  });
  gsap.to('.alt', {
    x: 50,
    opacity: 1,
    scrollTrigger: {
      trigger: '#servicos',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    }
  });



}
gsap.to('.card:nth-child(1)', {
  opacity: 1,
  top: 0,
  scrollTrigger: {
    trigger: '.cards',
    start: '20% center',
    end: 'center center',
    scrub: true,
  }
});




gsap.to('.card:nth-child(2)', {
  opacity: 1,
  top: 0,
  scrollTrigger: {
    trigger: '.cards',
    start: 'top center',
    end: 'center center',
    scrub: true,
  }
});


gsap.to('.card:nth-child(3)', {
  opacity: 1,
  top: 0,
  scrollTrigger: {
    trigger: '.cards',
    start: '30% center',
    end: 'center center',
    scrub: true,
  }
});










const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

function highlightSection() {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("focus");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("focus");
    }
  });
}

window.addEventListener("scroll", highlightSection);



document.querySelectorAll('.dropDownContent a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      const viewportHeight = window.innerHeight;
      const elementHeight = targetElement.offsetHeight;

      const scrollToPosition = offsetTop - (viewportHeight / 2) + (elementHeight / 2);

      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    }
  });
});




btn.addEventListener("click", () => {
  const header = document.querySelector("header")
  if (header.classList.contains("active")) {
    btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#302f57"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>`
  } else {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#302f57"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`
  }

  header.classList.toggle("active")



})