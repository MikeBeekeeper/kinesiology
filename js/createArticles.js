import articles from '../database/articles.js'
const articlesList = document.querySelector('.articles__list');
const createArticlesMarkUp = articles.map(article => 
    `
    <li class="articles__item about__item">
       <div class="about__title--margin-wrap"><h2 class="articles__title about__title">${article.title}</h2></div>
       <p>${article.content}</p>
    </li>
    `   
    ).join('');

    articlesList.insertAdjacentHTML('beforeend', createArticlesMarkUp)
