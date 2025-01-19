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
    "Semester 1": [
      "Human Anatomy and Physiology I – Theory",
      "Pharmaceutical Analysis I – Theory",
      "Pharmaceutics I – Theory",
      "Pharmaceutical Inorganic Chemistry – Theory",
      "Communication Skills – Theory",
      "Remedial Biology/Mathematics – Theory",
    ],
    "Semester 2": [
      "Human Anatomy and Physiology II – Theory",
      "Pharmaceutical Organic Chemistry I – Theory",
      "Biochemistry – Theory",
      "Pathophysiology – Theory",
      "Computer Applications in Pharmacy – Theory",
      "Environmental Sciences",
    ],
    "Semester 3": [
      "Pharmaceutical Organic Chemistry II – Theory",
      "Physical Pharmaceutics I – Theory",
      "Pharmaceutical Microbiology – Theory",
      "Pharmaceutical Engineering – Theory",
    ],
    "Semester 4": [
      "Pharmaceutical Organic Chemistry III – Theory",
      "Medicinal Chemistry I – Theory",
      "Physical Pharmaceutics II – Theory",
      "Pharmacology I – Theory",
      "Pharmacognosy and Phytochemistry I – Theory",
    ],
    "Semester 5": [
      "Medicinal Chemistry II – Theory",
      "Industrial Pharmacy I – Theory",
      "Pharmacology II – Theory",
      "Pharmacognosy and Phytochemistry II – Theory",
      "Pharmaceutical Jurisprudence – Theory",
    ],
    "Semester 6": [
      "Medicinal Chemistry III – Theory",
      "Pharmacology III – Theory",
      "Herbal Drug Technology – Theory",
      "Biopharmaceutics and Pharmacokinetics – Theory",
      "Pharmaceutical Biotechnology – Theory",
      "Quality Assurance – Theory",
    ],
    "Semester 7": [
      "Instrumental Methods of Analysis – Theory",
      "Industrial Pharmacy II – Theory",
      "Pharmacy Practice – Theory",
      "Novel Drug Delivery System – Theory",
    ],
    "Semester 8": [
      "Biostatistics and Research Methodology – Theory",
      "Social and Preventive Pharmacy – Theory",
      "Pharma Marketing Management – Theory",
      "Pharmaceutical Regulatory Science – Theory",
      "Pharmacovigilance – Theory",
      "Quality Control and Standardization of Herbals – Theory",
      "Computer-Aided Drug Design – Theory",
      "Cell and Molecular Biology – Theory",
      "Cosmetic Science – Theory",
      "Experimental Pharmacology – Theory",
      "Advanced Instrumentation Techniques – Theory",
      "Dietary Supplements and Nutraceuticals – Theory",
      "Project Work",
    ],
    "Year 1": [
      "Pharmaceutics I",
      "Pharmaceutical Chemistry I",
      "Pharmacognosy",
      "Biochemistry and Clinical Pathology",
      "Human Anatomy and Physiology",
      "Health Education and Community Pharmacy",
    ],
    "Year 2": [
      "Pharmaceutics II",
      "Pharmaceutical Chemistry II",
      "Pharmacology and Toxicology",
      "Pharmaceutical Jurisprudence",
      "Drug Store and Business Management",
      "Hospital and Clinical Pharmacy",
    ],
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
            .filter((subject) => !subject.includes("Practical"))  // Exclude practical subjects
            .map((subject) => `<li>${subject} <button>Download</button></li>`)
            .join("")}
        </ul>
      </div>
      <div class="dropdown">
        <h3>PYQs</h3>
        <ul>
          ${selectedSubjects
            .filter((subject) => !subject.includes("Practical"))  // Exclude practical subjects
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
