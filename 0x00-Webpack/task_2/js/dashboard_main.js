import $ from 'jquery';
import { debounce } from 'lodash';
import '../css/main.css';

// Add logo element at the top of the document
$('body').prepend('<div id="logo"></div>');

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