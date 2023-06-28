const navigation = () => {
  const navigationLinks = document.querySelectorAll(".navigation a");

  navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetSectionId = link.getAttribute("href").substring(1);

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        section.style.display = "none";
      });

      const selectedSection = document.getElementById(targetSectionId);
      selectedSection.style.display = "flex";
    });
  });
};

export default navigation;
