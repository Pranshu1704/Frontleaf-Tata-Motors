window.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  navbar.classList.add("hidden");

  toggleBtn.addEventListener("click", function (e) {
    navbar.classList.toggle("hidden");
    e.stopPropagation();
  });

  if (window.innerWidth < 850) {
    document.addEventListener("click", function (e) {
    
      if (e.target.closest(".slider") || e.target.closest(".list")) {
        return;
      }

      if (
        !navbar.classList.contains("hidden") &&
        !navbar.contains(e.target) &&
        e.target !== toggleBtn
      ) {
        navbar.classList.add("hidden");
      }
    });
  }
});
