class AromaCanvasTheme {
  constructor() {
    this.initPyramid();
    this.initScrollObserver();
  }

  initPyramid() {
    const tiers = document.querySelectorAll('.pyramid-tier');
    tiers.forEach(tier => {
      tier.addEventListener('click', (e) => {
        const activeTier = e.currentTarget;
        
        tiers.forEach(t => t.setAttribute('aria-expanded', 'false'));
        activeTier.setAttribute('aria-expanded', 'true');

        const panelId = activeTier.getAttribute('aria-controls');
        const activePanel = document.getElementById(panelId);

        if (activePanel) {
          const panels = activePanel.parentElement.querySelectorAll('.tier-panel');
          panels.forEach(p => p.classList.add('hidden'));
          activePanel.classList.remove('hidden');
        }
      });
    });
  }

  initScrollObserver() {
    const acts = document.querySelectorAll('.narrative-act');
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const phase = entry.target.getAttribute('data-act-phase');
          const announcer = document.getElementById('screen-reader-announce');
          if (announcer) {
            announcer.textContent = `Displaying ${phase} fragrance notes.`;
          }
        }
      });
    }, { rootMargin: '-30% 0px -30% 0px' });

    acts.forEach(act => observer.observe(act));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.AromaCanvas = new AromaCanvasTheme();
});
