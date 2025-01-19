document.addEventListener("DOMContentLoaded", () => {
  const programToggle = document.querySelector(".program-toggle");
  const semesterContainer = document.getElementById("semester-container");
  const programTitle = document.getElementById("program-title");
  const detailsSection = document.getElementById("details-section");
  const themeToggle = document.getElementById("theme-toggle");

  const programs = {
    "B.Pharm": Array.from({ length: 8 }, (_, i) => `Semester ${i + 1}`),
    "D.Pharm": ["Year 1", "Year 2"],
  };

  const subjects = {
    "Semester 1": ["Human Anatomy & Physiology I", "Pharmaceutical Analysis I", "Pharmaceutics I"],
    "Semester 2": ["Human Anatomy & Physiology II", "Pharmaceutical Organic Chemistry I", "Biochemistry"],
    "Semester 3": ["Pharmaceutical Organic Chemistry II", "Physical Pharmaceutics I", "Pharmaceutical Microbiology"],
    "Semester 4": ["Pharmaceutical Organic Chemistry III", "Medicinal Chemistry I", "Pharmacology I"],
    "Semester 5": ["Medicinal Chemistry II", "Industrial Pharmacy I", "Pharmacology II"],
    "Semester 6": ["Biopharmaceutics", "Herbal Drug Technology", "Quality Assurance"],
    "Semester 7": ["Pharmacy Practice", "Novel Drug Delivery System", "Instrumental Analysis"],
    "Semester 8": ["Project Work", "Pharmacovigilance", "Advanced Instrumentation Techniques"],
    "Year 1": ["Pharmaceutics I", "Pharmaceutical Chemistry I", "Biochemistry & Clinical Pathology"],
    "Year 2": ["Pharmaceutics II", "Pharmaceutical Chemistry II", "Pharmacology"],
  };

  function renderSemesters(program) {
    programTitle.textContent = program;
    semesterContainer.innerHTML = "";
    programs[program].forEach((sem) => {
      const button = document.createElement("button");
      button.textContent = sem;
      button.addEventListener("click", () => renderDetails(sem));
      semesterContainer.appendChild(button);
    });
  }

  function renderDetails(semester) {
    const selectedSubjects = subjects[semester] || [];
    detailsSection.innerHTML = `
      <div class="dropdown">
        <h3>Subjects</h3>
        <ul>
          ${selectedSubjects.map((subject) => `<li>${subject}</li>`).join("")}
        </ul>
      </div>
      <div class="dropdown">
        <h3>Syllabus</h3>
        <button>Download</button>
      </div>
      <div class="dropdown">
        <h3>Notes</h3>
        <ul>
          ${selectedSubjects
            .map((subject) => `<li>${subject} <button>Download</button></li>`)
            .join("")}
        </ul>
      </div>
      <div class="dropdown">
        <h3>PYQs</h3>
        <ul>
          ${selectedSubjects
            .map((subject) => `<li>${subject} <button>Download</button></li>`)
            .join("")}
        </ul>
      </div>
    `;
  }

  programToggle.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      document.querySelectorAll(".program-toggle button").forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      renderSemesters(e.target.id === "bpharm" ? "B.Pharm" : "D.Pharm");
    }
  });

  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", themeToggle.checked);
  });

  renderSemesters("B.Pharm");
});
