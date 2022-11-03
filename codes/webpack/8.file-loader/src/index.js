import createElement from './header';
import '../styles/index.css';

import pg from '../assets/sc.png'


const heading = createElement();
document.body.append(heading);

const img = new Image();
img.src = pg;
document.body.append(img);
