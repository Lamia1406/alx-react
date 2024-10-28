import $ from "jquery";
import _ from 'lodash';
import "./body.css"
$("body").append("<button>Click here to get started</button>")
$("body").append("<p id='count'></p>")
let count = $('#count').html() || 0;
const updateCounter = () =>{
    $('#count').html(`${++count} clicks on the button`);
}
$('button').on('click', updateCounter);
_.debounce(updateCounter, 500);