function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= -1 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const handler = (entries) => {
  // Get all the links from the side menu
  const allLinks = document.querySelectorAll("#TOC ul li a");

  // Get all the sections we want to track
  const allSections = document.querySelectorAll("h1");

  // Get all entries that have just come into the viewport
  const allEntries = new Set(
    entries
      .filter((entry) => entry.isIntersecting == true)
      .map((entry) => entry.target)
  );

  let currentSection;

  // Look through all sections
  for (let i = 0; i < allSections.length; i++) {
    // Get the current section
    currentSection = allSections[i];
    // If the section is in the viewport or it has just intersected, set it as active
    if (isElementInViewport(currentSection) || allEntries.has(currentSection)) {
      // Set all links as inactive
      allLinks.forEach((link) => link.classList.remove("active"));
      // Set current link to active
      document
        .querySelector(`#toc-${currentSection.id}`)
        .classList.add("active");
      // Exit loop after setting first active link
      break;
    }
  }
};

// Create a new observer with the handler
const observer = new IntersectionObserver(handler);

// Observe all headings on our webpage
document.querySelectorAll("h1").forEach((section) => {
  observer.observe(section);
});

