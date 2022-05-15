import './styles.css'

export class Heading {
    create(text) {
        const h1 = document.createElement('h1');

        h1.innerText = text;
        h1.classList.add('main-title')

        document.querySelector('body').appendChild(h1)
    }
}