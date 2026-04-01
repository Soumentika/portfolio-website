document.addEventListener("DOMContentLoaded", function () {
  // SELECT ELEMENTS
  const sections = document.querySelectorAll('.section');
  const buttons = document.querySelectorAll('.control');
  // PAGE SWITCHING
  buttons.forEach(button => {
    button.addEventListener('click', function () {

      const id = this.getAttribute('data-id');
      console.log("Clicked:", id); // debug

      // REMOVE ACTIVE BUTTON
      const activeBtn = document.querySelector('.active-btn');
      if (activeBtn) {
        activeBtn.classList.remove('active-btn');
      }

      // ADD ACTIVE BUTTON
      this.classList.add('active-btn');

      /* HIDE ALL SECTIONS
      sections.forEach(section => {
        section.classList.remove('active');
      });*/
      sections.forEach(section => {
  section.classList.remove('active');
  section.style.display = "none";   // ADD THIS
});
const target = document.getElementById(id);
if (target) {
  target.classList.add('active');
  target.style.display = "block";   // ADD THIS
}
      // SHOW SELECTED SECTION
      /*const target = document.getElementById(id);
      if (target) {
        target.classList.add('active');
      } else {
        console.error("No section found with id:", id);
      }
*/
    });
  });


  // 🌙 THEME TOGGLE
  const themeBtn = document.querySelector('.theme-btn');

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');

      if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('portfolio-theme', 'light');
      } else {
        localStorage.setItem('portfolio-theme', 'dark');
      }
    });
  }

  // LOAD SAVED THEME
  if (localStorage.getItem('portfolio-theme') === 'light') {
    document.body.classList.add('light-mode');
  }

});