const githubUsername = glorymaeperalta;
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('skills-list');
    list.innerHTML = '';

    data.skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      list.appendChild(li);
    });
  })
  .catch(error => {
    document.getElementById('skills-list').textContent = 'Error loading data.';
    console.error('Error fetching JSON:', error);
  });

{
  "skills": [
    "HTML, CSS, and JavaScript",
    "Web Design and UX/UI",
    "Problem Solving",
    "Team Collaboration",
    "Music and Creative Media"
  ]
    }
