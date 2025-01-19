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
      { theory: "Human Anatomy and Physiology I – Theory", practical: "Human Anatomy and Physiology I – Practical" },
      { theory: "Pharmaceutical Analysis I – Theory", practical: "Pharmaceutical Analysis I – Practical" },
      { theory: "Pharmaceutics I – Theory", practical: "Pharmaceutics I – Practical" },
      { theory: "Pharmaceutical Inorganic Chemistry – Theory", practical: "Pharmaceutical Inorganic Chemistry – Practical" },
      { theory: "Communication Skills – Theory", practical: "Communication Skills – Practical" },
      { theory: "Remedial Biology/Mathematics – Theory" },
    ],
    "Semester 2": [
      { theory: "Human Anatomy and Physiology II – Theory", practical: "Human Anatomy and Physiology II – Practical" },
      { theory: "Pharmaceutical Organic Chemistry I – Theory", practical: "Pharmaceutical Organic Chemistry I – Practical" },
      { theory: "Biochemistry – Theory", practical: "Biochemistry – Practical" },
      { theory: "Pathophysiology – Theory" },
      { theory: "Computer Applications in Pharmacy – Theory", practical: "Computer Applications in Pharmacy – Practical" },
      { theory: "Environmental Sciences" },
    ],
    "Semester 3": [
      { theory: "Pharmaceutical Organic Chemistry II – Theory", practical: "Pharmaceutical Organic Chemistry II – Practical" },
      { theory: "Physical Pharmaceutics I – Theory", practical: "Physical Pharmaceutics I – Practical" },
      { theory: "Pharmaceutical Microbiology – Theory", practical: "Pharmaceutical Microbiology – Practical" },
      { theory: "Pharmaceutical Engineering – Theory", practical: "Pharmaceutical Engineering – Practical" },
    ],
    "Semester 4": [
      { theory: "Pharmaceutical Organic Chemistry III – Theory", practical: "Pharmaceutical Organic Chemistry III – Practical" },
      { theory: "Medicinal Chemistry I – Theory", practical: "Medicinal Chemistry I – Practical" },
      { theory: "Physical Pharmaceutics II – Theory", practical: "Physical Pharmaceutics II – Practical" },
      { theory: "Pharmacology I – Theory", practical: "Pharmacology I – Practical" },
      { theory: "Pharmacognosy and Phytochemistry I – Theory", practical: "Pharmacognosy and Phytochemistry I – Practical" },
    ],
    "Semester 5": [
      { theory: "Medicinal Chemistry II – Theory", practical: "Medicinal Chemistry II – Practical" },
      { theory: "Industrial Pharmacy I – Theory", practical: "Industrial Pharmacy I – Practical" },
      { theory: "Pharmacology II – Theory", practical: "Pharmacology II – Practical" },
      { theory: "Pharmacognosy and Phytochemistry II – Theory", practical: "Pharmacognosy and Phytochemistry II – Practical" },
      { theory: "Pharmaceutical Jurisprudence – Theory" },
    ],
    "Semester 6": [
      { theory: "Medicinal Chemistry III – Theory", practical: "Medicinal Chemistry III – Practical" },
      { theory: "Pharmacology III – Theory", practical: "Pharmacology III – Practical" },
      { theory: "Herbal Drug Technology – Theory", practical: "Herbal Drug Technology – Practical" },
      { theory: "Biopharmaceutics and Pharmacokinetics – Theory", practical: "Biopharmaceutics and Pharmacokinetics – Practical" },
      { theory: "Pharmaceutical Biotechnology – Theory" },
      { theory: "Quality Assurance – Theory" },
    ],
    "Semester 7": [
      { theory: "Instrumental Methods of Analysis – Theory", practical: "Instrumental Methods of Analysis – Practical" },
      { theory: "Industrial Pharmacy II – Theory", practical: "Industrial Pharmacy II – Practical" },
      { theory: "Pharmacy Practice – Theory", practical: "Pharmacy Practice – Practical" },
      { theory: "Novel Drug Delivery System – Theory" },
    ],
    "Semester 8": [
      { theory: "Biostatistics and Research Methodology – Theory" },
      { theory: "Social and Preventive Pharmacy – Theory" },
      { theory: "Pharma Marketing Management – Theory" },
      { theory: "Pharmaceutical Regulatory Science – Theory" },
      { theory: "Pharmacovigilance – Theory" },
      { theory: "Quality Control and Standardization of Herbals – Theory" },
      { theory: "Computer-Aided Drug Design – Theory" },
      { theory: "Cell and Molecular Biology – Theory" },
      { theory: "Cosmetic Science – Theory" },
      { theory: "Experimental Pharmacology – Theory" },
      { theory: "Advanced Instrumentation Techniques – Theory" },
      { theory: "Dietary Supplements and Nutraceuticals – Theory" },
      { theory: "Project Work" },
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

  // Render the semester buttons
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

  // Render the details of the selected semester
  function renderDetails(semester) {
    const selectedSubjects = subjects[semester] || [];
    detailsSection.innerHTML = `
      <div class="dropdown">
        <h3>Subjects</h3>
        <ul>
          ${selectedSubjects
            .map(
              (subject) =>
                `<li>${subject.theory} ${subject.practical ? `<span>(Practical: ${subject.practical})</span>` : ""}</li>`
            )
            .join("")}
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
            .filter((subject) => !subject.practical)  // Exclude practical subjects
            .map((subject) => `<li>${subject.theory} <button>Download</button></li>`)
            .join("")}
        </ul>
      </div>
      <div class="dropdown">
        <h3>PYQs</h3>
        <ul>
          ${selectedSubjects
            .filter((subject) => !subject.practical)  // Exclude practical subjects
            .map((subject) => `<li>${subject.theory} <button>Download</button></li>`)
            .join("")}
        </ul>
      </div>
    `;
  }

  // Program and semester toggle
  programToggle.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      document.querySelectorAll(".program-toggle button").forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      renderSemesters(e.target.id === "bpharm" ? "B.Pharm" : "D.Pharm");
    }
  });

  // Theme toggle functionality
  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });

  // Initial render
  renderSemesters("B.Pharm");
});
