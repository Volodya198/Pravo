gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".additional-sections p").forEach(el => {
    splitToLetters(el);
  });
  gsap.set(".additional-sections .letter", { opacity: 0, y: 40 });

  const smoother = ScrollSmoother.create({
    wrapper: '.smoother',
    content: '.content',
    smooth: 2.5,
    effects: true
  });

  const intro = document.querySelector(".intro-slide");
  const btn = document.querySelector(".intro-slide button");
  const heroSection = document.querySelector(".hero-section");
  const hero = document.querySelector(".hero-section .hero");
  const nextBtn = document.querySelector(".main-elem-all");

  nextBtn.addEventListener("click", () => {
    smoother.scrollTo(".additional-sections", {
      duration: 2,
      ease: "power2.inOut"
    });
  });

  btn.addEventListener("click", () => {
    gsap.to(intro, { 
      opacity: 0, 
      duration: 0.5, 
      ease: "power2.inOut",
      onComplete: ()=> {
        setTimeout(() => {
          intro.style.opacity = "1";
        }, 2000);
      }
    });

    gsap.fromTo(hero, {opacity: 0}, {
      opacity: 1, 
      duration: 3, 
      ease: "power2.inOut"
    });

    smoother.scrollTo(".hero-section", {
      duration: 3,
      ease: "power2.inOut"
    });
  });

  gsap.fromTo(heroSection,
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".additional-sections",
        start: "top bottom",
        end: "top top",
        scrub: true
      }
    }
  );

  gsap.to(intro, {
    opacity: 0,
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",    
      end: "top+=200 top",
      scrub: true
    }
  });

  gsap.fromTo(hero, 
    { opacity: 0}, 
    { 
      opacity: 1, 
      y: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top center", 
        end: "bottom center",
        scrub: true
      }
    }
  );

  gsap.fromTo('.hero-section', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'center',
      end: '820',
      scrub: true
    }
  });

  function splitToLetters(element) {
    const words = element.textContent.split(" ");
    element.innerHTML = words.map(word => {
      const letters = word.split("").map(ch => `<span class="letter">${ch}</span>`).join("");
      return `<span class="word">${letters}</span>`;
    }).join("<span class='space'>&nbsp;</span>");
  }
  gsap.to(".additional-sections .letter", {
    opacity: 1,
    y: 0,
    stagger: 0.05,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".additional-sections",
      start: "top 80%",
      toggleActions: "play none none reverse",
      scroller: ".smoother"
    }
  });

  gsap.fromTo(".additional-sections", 
    { opacity: 0, y: 100 }, 
    { 
      opacity: 1, 
      y: 0, 
      duration: 2.5, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".additional-sections",
        start: "top 80%",
        toggleActions: "play none none reverse",
        scroller: ".smoother"
      }
    }
  );

  let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');
  itemsL.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: -80 }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-100',
        scrub: true
      }
    });
  });

  let itemsR = gsap.utils.toArray('.gallery__right .gallery__item');
  itemsR.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: 80 }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-750',
        end: 'top',
        scrub: true
      }
    });
  });

  gsap.fromTo("h1 .letter",
    { textShadow: "0 0 0px transparent" },
    {
      textShadow: "0 0 10px #ffffffff, 0 0 20px #ffffffff, 0 0 40px #ffffffff",
      duration: 0.6,
      stagger: {
        each: 0.15,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      },
      ease: "power2.inOut"
    }
  );

});
