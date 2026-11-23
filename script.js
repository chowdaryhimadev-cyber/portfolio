// Portfolio Interactive UI Switcher & Engine

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }
});

const themeMeta = {
  editorial: {
    name: 'Style 1: Warm Editorial Minimalist (Inspired by Image 6)',
    heroPortrait: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    titleSuffix: 'That Matter.'
  },
  darkbento: {
    name: 'Style 2: Dark Cyber Bento (Inspired by Image 4)',
    heroPortrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
    titleSuffix: 'THAT SCALE.'
  },
  earthy: {
    name: 'Style 3: Organic Olive & Agency (Inspired by Image 1)',
    heroPortrait: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
    titleSuffix: 'That Inspire.'
  }
};

let currentTheme = 'editorial';

function switchTheme(theme) {
  currentTheme = theme;
  const body = document.body;

  // Remove existing theme classes
  body.classList.remove('theme-editorial', 'theme-darkbento', 'theme-earthy');
  body.classList.add(`theme-${theme}`);

  // Update active state in switcher bar
  const buttons = document.querySelectorAll('.switch-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-theme') === theme) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Dynamically update images or hero specifics if needed
  const portraitImg = document.getElementById('portraitImg');
  if (portraitImg && themeMeta[theme]) {
    portraitImg.src = themeMeta[theme].heroPortrait;
  }

  // Update modal preview text
  const selectedThemeName = document.getElementById('selectedThemeName');
  if (selectedThemeName && themeMeta[theme]) {
    selectedThemeName.textContent = themeMeta[theme].name;
  }

  // Re-trigger icon rendering
  if (window.lucide) {
    lucide.createIcons();
  }
}

function openFinalizeModal() {
  const modal = document.getElementById('finalizeModal');
  const selectedThemeName = document.getElementById('selectedThemeName');
  if (selectedThemeName && themeMeta[currentTheme]) {
    selectedThemeName.textContent = themeMeta[currentTheme].name;
  }
  modal.classList.add('active');
}

function closeFinalizeModal() {
  const modal = document.getElementById('finalizeModal');
  modal.classList.remove('active');
}

// Close modal when clicking outside card
window.addEventListener('click', (e) => {
  const modal = document.getElementById('finalizeModal');
  if (e.target === modal) {
    closeFinalizeModal();
  }
});
