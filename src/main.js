/* ARRAY OF LANGUAGES USED ON GITHUB */
const langArray = [
  'Python',
  'Javascript',
  'Java',
  'C#',
  'C++',
  'Go',
  'Rust',
  'Typescript',
  'HTML',
  'CSS',
  'SQL',
  'Ruby',
  'PHP',
  'Kotlin',
  'Swift'
]
/* ELEMENTS */
const langDropdown = document.getElementById('languages');
const promptDiv = document.getElementById('prompt-div');
const promptText = document.getElementById('prompt');
const refreshButton = document.getElementById('refresh');

/* POPULATE DROPDOWN */
langArray.forEach((lang) => {
  const newOption = document.createElement('option');
  newOption.value = lang.toLowerCase();
  newOption.textContent = lang;

  langDropdown.appendChild(newOption);
});