import './font.css'

import $ from 'jquery';

const body = $('body')

const p = $('<p></p>').text('inserindo texto').css('color', 'red');

body.append(p)