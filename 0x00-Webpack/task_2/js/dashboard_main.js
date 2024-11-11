import $ from 'jquery';
import { debounce } from 'lodash';
import '../css/main.css';
import logo from '../assets/holberton-logo.jpg'; // Import the logo image

// Add logo element at the top of the document
$('body').prepend('<div id="logo"></div>');

// Use jQuery to set the imported image as the background of #logo
$('#logo').css({
  'background-image': `url(${logo})`,
  'width': '200px',
  'height': '200px',
  'background-size': 'cover',
});

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;
function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

// Imported from lodash to debounce the click event
$('button').on('click', debounce(updateCounter, 500));
