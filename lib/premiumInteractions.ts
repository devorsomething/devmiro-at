'use client';

export function initPremiumInteractions() {
  // Scroll reveal observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all reveal elements
  document.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .reveal-stagger, .reveal-stagger-lg').forEach(el => {
    revealObserver.observe(el);
  });

  // Magnetic button effect
  const magneticButtons = document.querySelectorAll('.magnetic');
  magneticButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = (button as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      (button as HTMLElement).style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    button.addEventListener('mouseleave', () => {
      (button as HTMLElement).style.transform = 'translate(0, 0)';
    });
  });

  // Cursor orb following
  const cursorOrb = document.querySelector('.hero-orb-cursor') as HTMLElement;
  if (cursorOrb) {
    let mouseX = 0;
    let mouseY = 0;
    let orbX = 0;
    let orbY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateOrb() {
      orbX += (mouseX - orbX) * 0.1;
      orbY += (mouseY - orbY) * 0.1;
      
      cursorOrb.style.left = `${orbX - 400}px`;
      cursorOrb.style.top = `${orbY - 400}px`;
      
      requestAnimationFrame(animateOrb);
    }
    
    animateOrb();
  }

  // Cleanup function
  return () => {
    revealObserver.disconnect();
  };
}
