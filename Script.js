// Fetch and display data from data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = ''; // clear loading text

    data.skills.forEach(skill => {
      const skillElement = document.createElement('span');
      skillElement.classList.add('skill');
      skillElement.textContent = skill;
      skillsContainer.appendChild(skillElement);
    });
  })
  .catch(error => {
    document.getElementById('skills-container').textContent = 'Error loading data.';
    console.error('Error fetching JSON:', error);
  });
