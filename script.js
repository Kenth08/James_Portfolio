// ============================================================
//  script.js — Portfolio logic
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  populateData();
  initTyped();
  initNavbar();
  initScrollAnimations();
  initScrollTop();
  initContactForm();
  initCounters();
});

// ── Populate DOM from data.js ──────────────────────────────
function populateData() {
  const d = DATA;

  // Social links
  setHref("link-github",   d.github);
  setHref("link-linkedin", d.linkedin);
  setHref("link-facebook", d.facebook);
  setHref("footer-github",   d.github);
  setHref("footer-linkedin", d.linkedin);
  setHref("footer-facebook", d.facebook);

  // Resume
  const resumeBtn = document.getElementById("resume-btn");
  if (resumeBtn) resumeBtn.href = d.resumeFile;

  // Profile images
  const heroImg  = document.getElementById("hero-profile-img");
  const aboutImg = document.getElementById("about-img");
  if (heroImg  && d.profileImg) heroImg.src  = d.profileImg;
  if (aboutImg && d.aboutImg)   aboutImg.src = d.aboutImg;

  // About
  setText("about-role",     d.role);
  setText("about-bio",      d.bio1);
  setText("about-bio2",     d.bio2);
  setText("about-email",    d.email);
  setText("about-location", d.location);
  setText("about-phone",    d.phone);

  // Contact info
  setText("contact-email",    d.email);
  setText("contact-phone",    d.phone);
  setText("contact-location", d.location);

  // Footer
  setText("footer-phone",    d.phone);
  setText("footer-email",    d.email);
  setText("footer-location", d.location);

  // Stats (will be animated later)
  document.getElementById("stat-projects").dataset.target   = d.stats.projects.replace(/\D/g, "") || "0";
  document.getElementById("stat-experience").dataset.target = d.stats.experience.replace(/\D/g, "") || "0";
  document.getElementById("stat-skills").dataset.target     = d.stats.skills.replace(/\D/g, "") || "0";
  document.getElementById("stat-projects").dataset.suffix   = d.stats.projects.replace(/\d/g, "");
  document.getElementById("stat-experience").dataset.suffix = d.stats.experience.replace(/\d/g, "");
  document.getElementById("stat-skills").dataset.suffix     = d.stats.skills.replace(/\d/g, "");

  // Skills grid
  const grid = document.getElementById("skills-grid");
  d.skills.forEach((skill, i) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.style.setProperty("--accent", skill.color);
    card.setAttribute("data-aos", "zoom-in");
    card.setAttribute("data-aos-delay", `${i * 60}`);
    card.innerHTML = `
      <div class="skill-icon"><i class="${skill.icon}" style="color:${skill.color}"></i></div>
      <p class="skill-name">${skill.name}</p>
    `;
    grid.appendChild(card);
  });

  // Education timeline
  const timeline = document.getElementById("education-timeline");
  d.education.forEach((edu, i) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.setAttribute("data-aos", i % 2 === 0 ? "fade-right" : "fade-left");
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        ${edu.img ? `<div class="timeline-img-wrap"><img src="${edu.img}" alt="${edu.school}" /></div>` : ""}
        <div class="timeline-content">
          <h3>${edu.degree}</h3>
          <p class="timeline-school">${edu.school}</p>
          <p class="timeline-period"><i class="fas fa-calendar"></i> ${edu.period}</p>
          <span class="timeline-status ${edu.statusClass}">${edu.status}</span>
        </div>
      </div>
    `;
    timeline.appendChild(item);
  });

  // Projects grid
  const projGrid = document.getElementById("projects-grid");
  d.projects.forEach((proj, i) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", `${(i % 2) * 100}`);
    card.innerHTML = `
      <div class="project-img">
        <img src="${proj.img}" alt="${proj.title}" onerror="this.parentElement.classList.add('no-img')" />
        <div class="project-overlay">
          <a href="${proj.demo}" class="proj-btn" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
          <a href="${proj.code}" class="proj-btn" target="_blank"><i class="fab fa-github"></i> Code</a>
        </div>
      </div>
      <div class="project-info">
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <div class="project-tags">
          ${proj.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    `;
    projGrid.appendChild(card);
  });

  // Experience timeline
  const expTimeline = document.getElementById("exp-timeline");
  if (d.experience.length === 0 || (d.experience.length === 1 && d.experience[0].company === "Company / Organization")) {
    expTimeline.innerHTML = `<p class="no-data">Experience details coming soon.</p>`;
  } else {
    d.experience.forEach((exp, i) => {
      const item = document.createElement("div");
      item.className = "exp-item";
      item.setAttribute("data-aos", "fade-up");
      item.setAttribute("data-aos-delay", `${i * 100}`);
      item.innerHTML = `
        <div class="exp-icon"><i class="${exp.icon}"></i></div>
        <div class="exp-card">
          <div class="exp-header">
            <h3>${exp.role}</h3>
            <span class="exp-period">${exp.period}</span>
          </div>
          <p class="exp-company">${exp.company}</p>
          <p class="exp-desc">${exp.description}</p>
        </div>
      `;
      expTimeline.appendChild(item);
    });
  }

  // Certificates grid
  const certsGrid = document.getElementById("certs-grid");
  if (certsGrid && d.certificates && d.certificates.length) {
    d.certificates.forEach((cert, i) => {
      const card = document.createElement("div");
      card.className = "cert-card";
      card.style.setProperty("--cert-color", cert.color);
      card.setAttribute("data-aos", "fade-up");
      card.setAttribute("data-aos-delay", `${(i % 4) * 80}`);
      card.innerHTML = `
        <div class="cert-icon-wrap">
          <i class="${cert.icon}" style="color:${cert.color}"></i>
        </div>
        <div class="cert-body">
          <h3 class="cert-title">${cert.title}</h3>
          <p class="cert-issuer"><i class="fas fa-building"></i>${cert.issuer}</p>
          <p class="cert-date"><i class="fas fa-calendar-alt"></i>${cert.date}</p>
        </div>
        <a href="${cert.file}" target="_blank" class="cert-btn">
          <i class="fas fa-eye"></i> View Certificate
        </a>
      `;
      certsGrid.appendChild(card);
    });
  }
}

// ── Typing animation ──────────────────────────────────────
function initTyped() {
  const roles   = DATA.typedRoles;
  const el      = document.getElementById("typed");
  let roleIndex = 0;
  let charIndex = 0;
  let deleting  = false;
  let pause     = false;

  function tick() {
    const current = roles[roleIndex];
    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        pause = true;
        setTimeout(() => { pause = false; deleting = true; tick(); }, 1800);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting  = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 60 : 100);
  }
  tick();
}

// ── Navbar ────────────────────────────────────────────────
function initNavbar() {
  const navbar  = document.getElementById("navbar");
  const toggle  = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-links");
  const links   = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    updateActiveLink();
  });

  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    toggle.classList.toggle("open");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      toggle.classList.remove("open");
    });
  });
}

function updateActiveLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY  = window.scrollY + 120;
  sections.forEach(sec => {
    const top    = sec.offsetTop;
    const height = sec.offsetHeight;
    const id     = sec.getAttribute("id");
    const link   = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) link.classList.toggle("active", scrollY >= top && scrollY < top + height);
  });
}

// ── Scroll animations (lightweight AOS-like) ─────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aos-animate");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll("[data-aos]").forEach(el => observer.observe(el));
}

// ── Counter animation ─────────────────────────────────────
function initCounters() {
  const counters = document.querySelectorAll(".stat-number");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.target) || 0;
      const suffix = el.dataset.suffix || "";
      let current  = 0;
      const step   = Math.ceil(target / 40);
      const timer  = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current + suffix;
      }, 40);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ── Scroll-to-top button ──────────────────────────────────
function initScrollTop() {
  const btn = document.getElementById("scroll-top");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// ── Contact form ──────────────────────────────────────────
function initContactForm() {
  const form    = document.getElementById("contact-form");
  const success = document.getElementById("form-success");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Wire up a real form backend (EmailJS, Formspree, etc.) here.
    success.classList.add("visible");
    form.reset();
    setTimeout(() => success.classList.remove("visible"), 4000);
  });
}

// ── Helpers ───────────────────────────────────────────────
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
function setHref(id, href) {
  const el = document.getElementById(id);
  if (el && href && href !== "#") el.href = href;
}
