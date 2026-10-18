// Small JavaScript interactions for the portfolio website.
document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("themeToggle");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  // Feature 1: keep the selected theme consistent on every page.
  const themeKey = "dreiiPortfolioTheme";
  const savedTheme = localStorage.getItem(themeKey);
  if (savedTheme === "light") document.body.classList.add("light-mode");

  const updateThemeButton = () => {
    if (!themeButton) return;
    const isLight = document.body.classList.contains("light-mode");
    themeButton.textContent = isLight ? "☾" : "☼";
    themeButton.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    themeButton.setAttribute("title", isLight ? "Switch to dark mode" : "Switch to light mode");
  };
  updateThemeButton();

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      const isLight = document.body.classList.contains("light-mode");
      localStorage.setItem(themeKey, isLight ? "light" : "dark");
      updateThemeButton();
    });
  }

  // Mobile navigation menu.
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "×" : "☰";
    });
  }

  // Feature 2: show a welcome message when the visitor clicks the button.
  const welcomeButton = document.getElementById("welcomeButton");
  const welcomeMessage = document.getElementById("welcomeMessage");
  if (welcomeButton && welcomeMessage) {
    welcomeButton.addEventListener("click", () => {
      welcomeMessage.textContent = "Hey! Thanks for visiting my portfolio. Have a great day!";
      welcomeButton.textContent = "Thanks for saying hello! ✓";
    });
  }

  // Feature 3: reveal or hide the extra personal information.
  const moreButton = document.getElementById("moreAboutButton");
  const morePanel = document.getElementById("moreAbout");
  if (moreButton && morePanel) {
    moreButton.addEventListener("click", () => {
      const willShow = morePanel.hidden;
      morePanel.hidden = !willShow;
      moreButton.textContent = willShow ? "Hide personal interests" : "Show personal interests";
    });
  }

  // Feature 4: simple front-end demo form validation and confirmation.
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  if (form && formMessage) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("visitorName").value.trim();
      if (!name) {
        formMessage.textContent = "Please enter your name first.";
        return;
      }
      formMessage.textContent = `Thanks, ${name}! Your message is ready, but this demo does not send it to a server.`;
      form.reset();
    });
  }

  // Back-to-top links return to the top of the current page.
  document.querySelectorAll(".back-top").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});
