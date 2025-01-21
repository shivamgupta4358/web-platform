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
    // B.Pharm Semesters
    "Semester 1": [
      { name: "Human Anatomy and Physiology I", hasPractical: true },
      { name: "Pharmaceutical Analysis I", hasPractical: true },
      { name: "Pharmaceutics I", hasPractical: true },
      { name: "Pharmaceutical Inorganic Chemistry", hasPractical: true },
      { name: "Communication Skills", hasPractical: true },
      { name: "Remedial Biology/Mathematics", hasPractical: false },
    ],
    "Semester 2": [
      { name: "Human Anatomy and Physiology II", hasPractical: true },
      { name: "Pharmaceutical Organic Chemistry I", hasPractical: true },
      { name: "Biochemistry", hasPractical: true },
      { name: "Pathophysiology", hasPractical: false },
      { name: "Computer Applications in Pharmacy", hasPractical: true },
      { name: "Environmental Sciences", hasPractical: false },
    ],
    "Semester 3": [
      { name: "Pharmaceutical Organic Chemistry II", hasPractical: true },
      { name: "Physical Pharmaceutics I", hasPractical: true },
      { name: "Pharmaceutical Microbiology", hasPractical: true },
      { name: "Pharmaceutical Engineering", hasPractical: true },
    ],
    "Semester 4": [
      { name: "Pharmaceutical Organic Chemistry III", hasPractical: true },
      { name: "Medicinal Chemistry I", hasPractical: true },
      { name: "Physical Pharmaceutics II", hasPractical: true },
      { name: "Pharmacology I", hasPractical: true },
      { name: "Pharmacognosy and Phytochemistry I", hasPractical: true },
    ],
    "Semester 5": [
      { name: "Medicinal Chemistry II", hasPractical: true },
      { name: "Industrial Pharmacy I", hasPractical: true },
      { name: "Pharmacology II", hasPractical: true },
      { name: "Pharmacognosy and Phytochemistry II", hasPractical: true },
      { name: "Pharmaceutical Jurisprudence", hasPractical: false },
    ],
    "Semester 6": [
      { name: "Medicinal Chemistry III", hasPractical: true },
      { name: "Pharmacology III", hasPractical: true },
      { name: "Herbal Drug Technology", hasPractical: true },
      { name: "Biopharmaceutics and Pharmacokinetics", hasPractical: false },
      { name: "Pharmaceutical Biotechnology", hasPractical: false },
      { name: "Quality Assurance", hasPractical: false },
    ],
    "Semester 7": [
      { name: "Instrumental Methods of Analysis", hasPractical: true },
      { name: "Industrial Pharmacy II", hasPractical: true },
      { name: "Pharmacy Practice", hasPractical: true },
      { name: "Novel Drug Delivery System", hasPractical: false },
    ],
    "Semester 8": [
      { name: "Biostatistics and Research Methodology", hasPractical: false },
      { name: "Social and Preventive Pharmacy", hasPractical: false },
      { name: "Pharma Marketing Management", hasPractical: false },
      { name: "Pharmaceutical Regulatory Science", hasPractical: false },
      { name: "Pharmacovigilance", hasPractical: false },
      { name: "Quality Control and Standardization of Herbals", hasPractical: false },
      { name: "Computer-Aided Drug Design", hasPractical: false },
      { name: "Cell and Molecular Biology", hasPractical: false },
      { name: "Cosmetic Science", hasPractical: false },
      { name: "Experimental Pharmacology", hasPractical: false },
      { name: "Advanced Instrumentation Techniques", hasPractical: false },
      { name: "Dietary Supplements and Nutraceuticals", hasPractical: false },
      { name: "Project Work", hasPractical: false },
    ],
  };

  // Render semester buttons
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

  // Render details for the selected semester
  function renderDetails(semester) {
    const selectedSubjects = subjects[semester] || [];
    detailsSection.innerHTML = `
      <div class="dropdown">
        <h3>Subjects</h3>
        <ul>
          ${selectedSubjects
            .map((subject) =>
              subject.hasPractical
                ? `<li>${subject.name}: Theory + Practical</li>`
                : `<li>${subject.name}: Theory</li>`
            )
            .join("")}
        </ul>
      </div>
      <div class="dropdown">
        <h3>Syllabus</h3>
        ${semester === "Semester 1" ? `<a href="https://drive.google.com/file/d/15-cIl6C_fAwWMvI_TZTDSvd-Tu3WWrAq/view?usp=sharing" target="_blank"><button>Download Syllabus</button></a>` : ""}
        ${semester === "Semester 2" ? `<a href="https://drive.google.com/file/d/1C8Fls458MDclPpkagruBrzwikdGf7OeI/view?usp=share_link" target="_blank"><button>Download Syllabus</button></a>` : ""}
        ${semester === "Semester 3" ? `<a href="https://drive.google.com/file/d/1GCFN7eAY4kGwOna2J0kekz_1PUrFcUAY/view?usp=share_link" target="_blank"><button>Download Syllabus</button></a>` : ""}
        ${semester === "Semester 4" ? `<a href="https://drive.google.com/file/d/1tB44Ougteo4aCHTMrlY8N51XWiy5OjJX/view?usp=share_link" target="_blank"><button>Download Syllabus</button></a>` : ""}
        ${semester === "Semester 5" ? `<a href="https://drive.google.com/file/d/1NseqN5Y5MiNcsS0MHCHGBot_GPKuJw4H/view?usp=share_link" target="_blank"><button>Download Syllabus</button></a>` : ""}
        ${semester === "Semester 6" ? `<a href="https://drive.google.com/file/d/1j3gp8MHH75Y9tp9Zu2OP60ltV6efNheD/view?usp=share_link" target="_blank"><button>Download Syllabus</button></a>` : ""}
        ${semester === "Semester 7" ? `<a href="https://drive.google.com/file/d/12Fmkep5WPLaAgz1jZdSwPbX4XPeJmUic/view?usp=share_link" target="_blank"><button>Download Syllabus</button></a>` : ""}
        ${semester === "Semester 8" ? `<a href="https://drive.google.com/file/d/16Y4LrUhm3KqFT7nd0b_z8fSmcniCQMBD/view?usp=share_link" target="_blank"><button>Download Syllabus</button></a>` : ""}
        ${semester !== "Semester 1" && semester !== "Semester 2" && semester !== "Semester 3" && semester !== "Semester 4" && semester !== "Semester 5" && semester !== "Semester 6" && semester !== "Semester 7" && semester !== "Semester 8" ? `<button>Download</button>` : ""}
      </div>
      <div class="dropdown">
        <h3>Notes</h3>
        <ul>
          ${selectedSubjects
            .map((subject) => `<li>${subject.name} <button>Download</button></li>`) // Include all theory subjects
            .join("")}
        </ul>
      </div>
      <div class="dropdown">
        <h3>PYQs</h3>
        <ul>
          ${selectedSubjects
            .map((subject) => `<li>${subject.name} <button>Download</button></li>`) // Include all theory subjects
            .join("")}
        </ul>
      </div>
    `;
  }

  // Handle program toggle
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
