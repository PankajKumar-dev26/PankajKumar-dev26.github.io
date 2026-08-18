const links = document.querySelectorAll('a[href^="#"]');
const typewriterText = document.querySelector(".typewriter-text");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

const desktopPhrases = [
  "useful web experiences.",
  "interactive web apps.",
  "modern interfaces.",
  "things that work.",
];

const mobilePhrases = ["web apps.", "modern UI.", "web design.", "web tools."];

const isMobile = window.matchMedia("(max-width: 600px)").matches;

const phrases = isMobile ? mobilePhrases : desktopPhrases;

let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeWriter() {
  const currentPhrase = phrases[phraseIndex];

  if (!deleting) {
    typewriterText.textContent = currentPhrase.slice(0, characterIndex + 1);
    characterIndex++;

    if (characterIndex === currentPhrase.length) {
      deleting = true;
      setTimeout(typeWriter, 1800);
      return;
    }

    setTimeout(typeWriter, 70);
  } else {
    typewriterText.textContent = currentPhrase.slice(0, characterIndex - 1);
    characterIndex--;

    if (characterIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;

      setTimeout(typeWriter, 400);
      return;
    }

    setTimeout(typeWriter, 40);
  }
}

typeWriter();
