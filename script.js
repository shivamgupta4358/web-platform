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

  // Mock data for subjects
  const subjects = {
    "Semester 1": ["Pharmaceutical Chemistry", "Anatomy", "Pharmaceutics"],
    "Semester 2": ["Pathophysiology", "Pharmacognosy", "Microbiology"],
    "Year 1": ["Biochemistry", "Hospital Pharmacy"],
    "Year 2": ["Clinical Pharmacy", "Pharmacotherapeutics"],
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
    detailsSection.innerHTML = `
      <h3>${semester}</h3>
      <div class="item">
        <strong>Syllabus:</strong>
        <button>Download</button>
      </div>
      <div class="item">
        <strong>Subjects:</strong>
        <ul>
          ${subjects[semester]?.map((subject) => `<li>${subject}</li>`).join("") || "No subjects available."}
        </ul>
      </div>
      <div class="item">
        <strong>Previous Year Questions:</strong>
        <button>Download</button>
      </div>
      <div class="item">
        <strong>Notes:</strong>
        <button>Download</button>
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
