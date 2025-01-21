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
    // Add the remaining semesters here...
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
            .map(
              (subject) =>
                `<li>${subject.name}: ${
                  subject.hasPractical ? "Theory + Practical" : "Theory"
                }</li>`
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
            .filter((subject) => !subject.hasPractical) // Exclude practical subjects
            .map((subject) => `<li>${subject.name} <button>Download</button></li>`)
            .join("")}
        </ul>
      </div>
      <div class="dropdown">
        <h3>PYQs</h3>
        <ul>
          ${selectedSubjects
            .filter((subject) => !subject.hasPractical) // Exclude practical subjects
            .map((subject) => `<li>${subject.name} <button>Download</button></li>`)
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
