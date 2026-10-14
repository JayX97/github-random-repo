/* ARRAY OF LANGUAGES USED ON GITHUB */
const langArray = [
  { language: 'Python', colorCode: '#3572A5' },
  { language: 'Javascript', colorCode: '#f1e05a' },
  { language: 'Java', colorCode: '#b07219' },
  { language: 'C#', colorCode: '#178600' },
  { language: 'C++', colorCode: '#f34b7d' },
  { language: 'Go', colorCode: '#375eab' },
  { language: 'Rust', colorCode: '#dea584' },
  { language: 'Typescript', colorCode: '#2b7489' },
  { language: 'HTML', colorCode: '#e44b23' },
  { language: 'CSS', colorCode: '#563d7c' },
  { language: 'SQL', colorCode: '#e38c00' },
  { language: 'Ruby', colorCode: '#701516' },
  { language: 'PHP', colorCode: '#4F5D95' },
  { language: 'Kotlin', colorCode: '#A97BFF' },
  { language: 'Swift', colorCode: '#F05138' }
];

/* API BASE URL*/
const baseUrl = 'https://api.github.com/search/repositories';

/* ELEMENTS */
const langDropdown = document.getElementById('languages');
const promptDiv = document.getElementById('prompt-div');
const promptText = document.getElementById('prompt');
const repoDiv = document.getElementById('repo-div');
const refreshButton = document.getElementById('refresh');

/* POPULATE DROPDOWN */
langArray.forEach((lang) => {
  const newOption = document.createElement('option');
  newOption.value = lang.language.toLowerCase();
  newOption.textContent = lang.language;

  langDropdown.appendChild(newOption);
});

/* FUNCTION TO GENERATE COLOR CODE FROM LANGUAGE */
const langColor = (str) => {
  return langArray.find(lang => lang.language.toLowerCase() === str).colorCode;
}

/* HANDLE UI STATE WHEN FETCHING DATA */
const handleState = (state) => {
  switch (state) {
    case 'loading':
      promptDiv.classList.remove('bg-red-200');
      promptDiv.classList.add('bg-gray-200');
      promptText.textContent = 'Loading, please wait...';
      promptDiv.hidden = false;
      repoDiv.hidden = true;
      refreshButton.hidden = true;
      refreshButton.classList.remove('bg-red-600');
      refreshButton.classList.add('bg-black');
      refreshButton.textContent = "Refresh";
      break;
    
    case 'error':
      promptDiv.classList.remove('bg-gray-200');
      promptDiv.classList.add('bg-red-200');
      promptText.textContent = 'Error fetching repositories';
      refreshButton.classList.remove('bg-black');
      refreshButton.classList.add('bg-red-600');
      refreshButton.textContent = 'Click to retry';
      refreshButton.hidden = false;
      break;

    case 'success':
      promptDiv.hidden = true;
      repoDiv.hidden = false;
      refreshButton.hidden = false;
      break;
  }
}

/* FETCH REPO FUNCTION */
const fetchRepo = async (lang) => {
  const title = document.getElementById('repo-title');
  const description = document.getElementById('repo-description');
  const logisticsColor = document.getElementById('repo-language-color');
  const language = document.getElementById('repo-language');
  const stars = document.getElementById('repo-stars');
  const forks = document.getElementById('repo-forks');
  const issues = document.getElementById('repo-open-issues');
  const repoLink = document.getElementById('repo-link');
  
  const fetchUrl = `${baseUrl}?q=language:${encodeURIComponent(lang)}&page=${Math.floor((Math.random() * 1000) + 1)}&per_page=1`; // fetch 1 page from random page
  handleState('loading');
  
  try {
    const response = await fetch(fetchUrl);

    if(!response.ok) throw new Error();

    const data = await response.json();
    const repo = data.items[0];
    console.log(repo);
    
    /* output repo data to repo div */
    title.textContent = repo.name;
    description.textContent = repo.description;
    logisticsColor.style.backgroundColor = langColor(repo.language.toLowerCase());
    language.textContent = repo.language;
    stars.textContent = repo.stargazers_count;
    forks.textContent = repo.forks_count;
    issues.textContent = repo.open_issues_count;
    repoLink.href= repo.html_url;

    handleState('success');
  } catch (error) {
    handleState('error');
  }
}

/* ADD EVENT LISTENERS */
langDropdown.addEventListener('change', (e) => {
  console.log(langDropdown.value);
  fetchRepo(langDropdown.value);
});

refreshButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(langDropdown.value);
  fetchRepo(langDropdown.value);
});