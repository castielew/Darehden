document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('menuDropdown');
  dropdown.addEventListener('change', function() {
    const sectionId = dropdown.value;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}); 