import { componentUser } from './component.user';

var user = componentUser('Gemerson', 43726306);
//var section = document.getElementsByClassName('js-content-main');
var section = document.getElementById('main');

console.log(section);

section.append(user.createComponent());
