import { Title } from './components/Title';
import { Image } from './components/Image';
import montain from '../src/img/montain.jpg'
import wallpp from '../src/img/wallpp.jpg'
import { Button } from './components/Button';
import warnningTemplate from './templates/warning.html'
import './styles/warning.css'
import fraseTxt from './files/frase.txt'
import dataUser from './files/description.json'


const title = new Title();
const image = new Image();
const button = new Button();

title.create('Primeira página');

image.create(montain);

image.create(wallpp);

button.create('Clique em mim pra tu ver rapa!');

// Babel Spread
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5};

let {a, b, ...test} = obj;

console.log(a)
console.log(b)
console.log(test)

// Importar HTML
const body = document.querySelector('body');
body.innerHTML += warnningTemplate;

console.log(fraseTxt.toUpperCase())

console.log('dataUser', dataUser)