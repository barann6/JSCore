let repoList;
let inputField = document.querySelector('#input');
let suggestionsList = document.querySelector('#suggestions');
let choicesList = document.querySelector('#list');
let awaitOnInput;

inputField.addEventListener('input', function (e) {
  clearInterval(awaitOnInput);
  suggestionsList.innerHTML = '';
  awaitOnInput = setTimeout(() => {
    if (!e.target.value) return;
    repoList = loadRepos(e.target.value)
      .then((response) => (repoList = response))
      .then(() => (repoList = formList(repoList)))
      .then(() => suggestionsFromList(repoList));
  }, 900);
});

inputField.addEventListener('change', function (e) {
  if (
    e.target.value &&
    repoList[e.target.value] &&
    document.activeElement === inputField
  ) {
    addItemToPage(repoList[e.target.value]);
  }
  e.target.value = '';
  suggestionsList.innerHTML = '';
});

choicesList.addEventListener('click', function (e) {
  if (e.target.tagName !== 'BUTTON') return;
  e.target.parentNode.remove();
});

async function loadRepos(name) {
  try {
    let results = await fetch(
      `https://api.github.com/search/repositories?q=${name}&per_page=5`
    );
    return await results.json();
  } catch (error) {
    throw error;
  }
}

function formList({ items }) {
  let list = {};
  for (let { name, owner, stargazers_count } of items) {
    list[name] = {
      name,
      owner: owner.login,
      stars: stargazers_count,
    };
  }
  return list;
}

function suggestionsFromList(list) {
  let suggestionsHTML = '';
  for (let name of Object.keys(list)) {
    suggestionsHTML += `<option>${name}</option>\n`;
  }
  suggestionsList.innerHTML = suggestionsHTML;
}

function addItemToPage({ name, owner, stars }) {
  let item = document.createElement('li');
  let deleteButton = document.createElement('button');
  item.innerText = `Name: ${name}
  Owner: ${owner}
  Stars: ${stars}`;
  item.append(deleteButton);
  choicesList.append(item);
}
