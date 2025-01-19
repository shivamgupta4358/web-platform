document.addEventListener("DOMContentLoaded", () => {
  const programToggle = document.querySelector(".program-toggle");
  const semesterContainer = document.getElementById("semester-container");
  const programTitle = document.getElementById("program-title");
  const themeToggle = document.getElementById("theme-toggle");

  const programs = {
    "B.Pharm": Array.from({ length: 8 }, (_, i) => `Semester ${i + 1}`),
    "D.Pharm": ["Year 1", "Year 2"],
  };

  function renderSemesters(program) {
    programTitle.textContent = program;
    semesterContainer.innerHTML = "";
    programs[program].forEach((sem) => {
      const button = document.createElement("button");
      button.textContent = sem;
      button.addEventListener("click", () => {
        alert(`You selected ${sem} of ${program}`);
      });
      semesterContainer.appendChild(button);
    });
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
