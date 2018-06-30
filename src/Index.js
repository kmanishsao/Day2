import _ from 'lodash';
import './style.css';
import logo from './logo.jpg';
import Data from './data/collection.xml';

function component() {
    var element = document.createElement('div');

    // Now lodash is imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // Add the image to our existing div.   
     var myIcon = new Image();
     myIcon.src = Icon;
    element.appendChild(logo);
    console.log(Data);
    return element;
}

document.body.appendChild(component());