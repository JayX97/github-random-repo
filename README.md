# GitHub Repository Finder

Project idea by roadmap.sh --> <https://roadmap.sh/projects/github-random-repo>

This project was created for the purpose of practicing data fetching from an external API using **Fetch**, handling asynchronous requests, managing different UI states with **Javascript**, and styling the app using **Tailwind CSS**.

**GitHub API** is used for fetching public repositories on GitHub.

### Tasks given from roadmap.sh

1. Dropdown menu to select a programming language for which the app will use to fetch a random repository from **GitHub API** that utilizes the selected language.

2. Information that should be displayed once the repository has been fetched and displayed in the UI --> repo name, description, programming language, number of stars, number of forks, number of open issues.

3. Users are able to fetch another random repository utilizing the same programming language from the dropdown menu with a button click.

4. States handled by the app UI --> Empty (initial state), Loading, Success, Error

5. Empty state displays a prompt telling the user to select a language from the dropdown.

6. Loading state displays a "Loading..." text inside the prompt box while fetching for a repository.

7. Success state displays required repository information along with a Refresh button.

8. Error state displays a red prompt box telling the user that an error occurred while fetching the repository along with a Retry button.