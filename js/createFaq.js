import faq from '../database/faq.js';

const faqList = document.querySelector('.faq__list');

const createFaqMarkUp = faq.map(f =>
    `
    <li class="faq__item">
    <p class="faq__question"><b>${f.question}</b></p>
    <p class="faq__answer">${f.answer}</p>
    </li>
    `).join('')



faqList.insertAdjacentHTML('beforeend', createFaqMarkUp)
