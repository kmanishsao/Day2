import _ from 'lodash';
import printMe from './print';

function component() {
    var element = document.createElement('div');

    // Now lodash is imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    var buttom = document.createElement("button");
    buttom.innerHTML = "Click me and Check me in console";
    buttom.onclick = printMe;
    element.appendChild(buttom);

    return element;
}

document.body.appendChild(component());