// Defining a baseURL and key to as part of the request URL
var baseURL = 'https://marketdata.websol.barchart.com/getQuote.json?';
var key = 'd391c674865bc74786ef9f6f7ac49c83';
var url;

// Grab references to all the DOM elements you'll need to manipulate

var searchForm = document.querySelector('.data-output');
var submit = document.querySelector('.submit');
var form = document.querySelector(form);
var section = document.querySelector('section');


//Event listeners to control the functionality
searchForm.addEventListener('submit', submitSearch);

function submitSearch(e) {
    pageNumber = 0;
    fetchResults(e);
}

function fetchResults(e) {
    // Use preventDefault() to stop the form submitting
    e.preventDefault();

    url = baseURL + '?api-key=' + key + '&symbols= + "data-output" + &type=daily&startDate=20160608000000

    fetch(url).then(function(result) {
        return result.json();
    }).then(function(json) {
        displayResults(json);
    });

} <
style >
    backgound - color: black;

<
/style>