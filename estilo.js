function showTab(tabId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.remove('active');
      section.classList.remove('zoom-in'); 
    });
  
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));
  
    const activeSection = document.getElementById(tabId);
    activeSection.classList.add('active');
    activeSection.classList.add('zoom-in'); 
  
    document.querySelector(`nav a[onclick="showTab('${tabId}')"]`).classList.add('active');
  }
  
  