import './styles.scss'

export class Button {
    create(text) {
        const button = document.createElement('button');

        button.innerText = text;

        button.classList.add('btn');

        document.querySelector('body').appendChild(button)
    }
}