// ============================================================
//  DATA FILE — Fill in James Bryan C. Corteza's information here
// ============================================================

const DATA = {

  // --- Personal Info ---
  name: "James Bryan C. Corteza",
  role: "Information Technology Student",   // shown under name in About
  email: "james@example.com",               // replace with real email
  phone: "+63 000 000 0000",                // replace with real phone
  location: "Philippines",                   // city / province

  // Social links — set to "#" if not applicable
  github:   "#",
  linkedin: "#",
  facebook: "#",

  // Resume/CV file path (place the PDF in the project folder)
  resumeFile: "resume.pdf",

  // Hero typing animation words
  typedRoles: [
    "Frontend Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Tech Innovator",
  ],

  // Stats shown in About section
  stats: {
    projects: "10+",
    experience: "1+",
    skills: "8+",
  },

  // About bios (two paragraphs)
  bio1: "Hello! I am James Bryan C. Corteza — a passionate and driven student with a deep interest in technology and software development. I enjoy solving problems through code and building projects that make a real impact.",
  bio2: "I continuously sharpen my technical and creative skills to deliver solutions that are efficient, user-friendly, and impactful. As an aspiring IT professional, I aim to contribute my knowledge and creativity in the ever-evolving digital landscape.",

  // --- Skills ---
  // icon: any Font Awesome class (e.g. "fab fa-html5") or use a custom SVG URL in `img`
  skills: [
    { name: "HTML5",       icon: "fab fa-html5",     color: "#e34f26" },
    { name: "CSS3",        icon: "fab fa-css3-alt",  color: "#1572b6" },
    { name: "JavaScript",  icon: "fab fa-js",        color: "#f7df1e" },
    { name: "React",       icon: "fab fa-react",     color: "#61dafb" },
    { name: "Python",      icon: "fab fa-python",    color: "#3776ab" },
    { name: "Java",        icon: "fab fa-java",      color: "#ed8b00" },
    { name: "Git",         icon: "fab fa-git-alt",   color: "#f05032" },
    { name: "Figma",       icon: "fab fa-figma",     color: "#f24e1e" },
  ],

  // --- Education ---
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Davao Del Norte State College",
      period: "2022 – Present",
      status: "Currently Pursuing",
      statusClass: "status-active",
      img: "images/dnsc-james.jfif",
    },
    {
      degree: "Senior High School",
      school: "Southern Davao National High School",
      period: "2020 – 2022",
      status: "Completed",
      statusClass: "status-done",
      img: "images/southern.webp",
    },
  ],

  // --- Projects ---
  projects: [
    {
      title: "Project One",
      description: "A brief description of what this project does and the technologies used.",
      tags: ["HTML", "CSS", "JavaScript"],
      img: "images/project1.jpg",
      demo: "#",
      code: "#",
    },
    {
      title: "Project Two",
      description: "A brief description of what this project does and the technologies used.",
      tags: ["React", "Node.js"],
      img: "images/project2.jpg",
      demo: "#",
      code: "#",
    },
    {
      title: "Project Three",
      description: "A brief description of what this project does and the technologies used.",
      tags: ["Python", "Machine Learning"],
      img: "images/project3.jpg",
      demo: "#",
      code: "#",
    },
    {
      title: "Project Four",
      description: "A brief description of what this project does and the technologies used.",
      tags: ["Java", "MySQL"],
      img: "images/project4.jpg",
      demo: "#",
      code: "#",
    },
  ],

  // --- Experience ---
  experience: [
    {
      role: "Role / Position",
      company: "Company / Organization",
      period: "Month Year – Month Year",
      description: "Brief description of responsibilities and accomplishments in this role.",
      icon: "fas fa-briefcase",
    },
    // Add more entries as needed
  ],

  // --- Certificates ---
  certificates: [
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "2024",
      file: "images/certificates/Python_Essentials_1_certificate_corteza-jamesbryan-dnsc-edu-ph_b348399b-5193-4c1f-bf40-e784072a2d89-2.pdf",
      color: "#3776ab",
      icon: "fab fa-python",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2024",
      file: "images/certificates/Introduction_to_Cybersecurity_certificate_corteza-jamesbryan-dnsc-edu-ph_59cb12ed-1496-453f-aaee-d65618222ce1.pdf",
      color: "#00c8ff",
      icon: "fas fa-shield-alt",
    },
    {
      title: "Certificate of Completion – OJT",
      issuer: "On-the-Job Training",
      date: "2024",
      file: "images/certificates/CERTIFICATE-OF-COMPLETION-OJT-1.pdf",
      color: "#7c3aed",
      icon: "fas fa-briefcase",
    },
    {
      title: "Certificate of Completion – OJT",
      issuer: "On-the-Job Training",
      date: "2024",
      file: "images/certificates/CERTIFICATE-OF-COMPLETION-OJT (1).pdf",
      color: "#7c3aed",
      icon: "fas fa-briefcase",
    },
  ],

  // Profile & About images
  profileImg: "images/james photo.jpg",
  aboutImg:   "images/james photo.jpg",
};
