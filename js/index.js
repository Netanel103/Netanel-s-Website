// nav toggle

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.add("open");
});

close.addEventListener("click", () => {
  navList.classList.remove("open");
});

// theme
const icons = [...document.querySelectorAll(".theme-icon")];
icons.forEach((icon) => {
  if (icon) {
    icon.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        icon.innerHTML = '<i class="bx bx-sun"></i>';
        icon.style.color = "white";
      } else {
        icon.innerHTML = '<i class="bx bx-moon"></i>';
        icon.style.color = "#121713";
      }
    });
  }
});

// colors
const widget = document.querySelector(".widget");
const control = document.querySelector(".control");

widget.addEventListener("click", () => {
  control.classList.toggle("open");
});

const colors = [...document.querySelectorAll(".colors span")];
document.querySelector(":root").style.setProperty("--customColor", "#42caff");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    const currentColor = color.dataset.id;
    document
      .querySelector(":root")
      .style.setProperty("--customColor", currentColor);
    img = document.querySelector(".about-img");
    if (currentColor === "#ce00ff") {
      img.src = "images/about-img-purple-2.png";
    }
    else if (currentColor === "#7462e1") {
      img.src ="images/about-img-purple.png";
    } else if (currentColor === "#ff6174") {
      img.src = "images/about-img-pink.png";
    } else if (currentColor === "#ff4600") {
      img.src = "images/about-img-orange.png";
    } else if (currentColor === "#42caff") {
      img.src = "images/about.png";
    }
  });
});

window.addEventListener("scroll", () => {
  control.classList.remove("open");
});

// typeit

new TypeIt("#type1", {
  speed: 150,
  loop: true,
  waitUntilVisible: true,
  breakLines: false,
})
  .type("<br><em>Bots Developer</em>", { delay: 400 })
  .pause(3000)
  .delete(23)
  .type("<br><em>Web Developer</em>")
  .pause(3000)
  .delete(12)
  .go();

// fix nav
const navBar = document.querySelector(".navigation");
const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// filter projects
const filterBtn = document.querySelector(".filter-btns");
const spans = [...document.querySelectorAll(".filter-btns span")];
const items = [...document.querySelectorAll(".projects .item")];

filterBtn.addEventListener("click", (e) => {
  const filter = e.target.closest("span");
  if (!filter) return;
  const id = filter.dataset.id;
  spans.forEach((span) => span.classList.remove("active"));
  filter.classList.add("active");
  items.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("active");
    const targetID = item.dataset.id;
    if (targetID === id) {
      item.classList.remove("hide");
      item.classList.add("active");
    } else if (id === "all") {
      item.classList.remove("hide");
    }
  });
});

// Scroll To

const links = [...document.querySelectorAll(".scroll-link")];

links.map((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navList.classList.remove("open");
  });
});

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".banner", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".content h3", { opacity: 0, duration: 1, delay: 2, y: -55 });
gsap.from(".content h1", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".content h3", { opacity: 0, duration: 1, delay: 2, y: -53 });
gsap.from(".content span", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".content p", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".content h4", { opacity: 0, duration: 1, delay: 3, y: -30 });
gsap.from(".content a", { opacity: 0, duration: 1, delay: 3, y: 20 });
gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 4, y: 70 });
gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: 30,
  stagger: 0.2,
});
gsap.from(".socials span", {
  opacity: 0,
  duration: 1,
  delay: 3,
  x: -30,
  stagger: 0.2,
});

const glide = document.querySelector(".glide");
if (glide)
  new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();

AOS.init();
