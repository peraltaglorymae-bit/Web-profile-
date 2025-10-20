/ Replace 'yourusername' with your actual GitHub username
const githubUsername = 'glorymaeperalta';

fetch(`https://api.github.com/users/${githubUsername}/repos`)
  .then(response => response.json())
  .then(repos => {
    const list = document.getElementById('repo-list');
    list.innerHTML = '';

    repos.forEach(repo => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> - ⭐ ${repo.stargazers_count}`;
      list.appendChild(li);
    });
  })
  .catch(error => {
    document.getElementById('repo-list').textContent = 'Error fetching repositories.';
    console.error('Error:', error);
  });

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
