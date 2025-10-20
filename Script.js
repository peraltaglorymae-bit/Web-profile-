// Fetch and display JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('project-list');
    list.innerHTML = '';

    data.projects.forEach(project => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${project.name}</strong> — ${project.description}`;
      list.appendChild(li);
    });
  })
  .catch(error => {
    document.getElementById('project-list').textContent = 'Error loading data.';
    console.error('Fetch error:', error);
  });
