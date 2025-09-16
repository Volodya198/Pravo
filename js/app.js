gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

document.addEventListener("DOMContentLoaded", () => {

  const smoother = ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 2,
    effects: true
  });

  const intro = document.querySelector(".intro-slide");
  const btn = document.querySelector(".intro-slide button");
  const hero = document.querySelector(".hero-section .hero");

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
      duration: 2, 
      ease: "power2.inOut"
    });
    smoother.scrollTo(".hero-section", {
      duration: 2,
      ease: "power2.inOut"
    });
  });

  gsap.to(intro, {
    opacity: 0,
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",    
      end: "center center",
      scrub: true
    }
  });

  gsap.fromTo('.hero-section', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'center',
      end: '820',
      scrub: true
    }
  });


  let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');
  itemsL.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: -50 }, {
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
    gsap.fromTo(item, { opacity: 0, x: 50 }, {
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

});
