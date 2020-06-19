/*DATE AND TIME*/  
var date = new Date();
var monthsArr = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'DEC'];
var month = monthsArr[date.getMonth()];
var year = date.getFullYear();
var day = date.getDate();

document.getElementById('day').textContent = day;
document.getElementById('month').textContent = month;
document.getElementById('year').textContent = year;

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();

    m = checkTime(m);

    document.getElementById('time').innerHTML = h + ":" + m ;
    t = setTimeout(function() {
        startTime()
    }, 500);
}
startTime();
/*QUOTES--------------------------------------------------------------------------------------------------------------*/
var quotes = [{japanese: "出る杭は打たれる", english: "The stake that sticks up gets hammered down."},
            {japanese: "知らぬが仏", english: "Not knowing is Buddha."},
            {japanese: "十人十色", english: "Ten persons, ten colors."},
            {japanese: "因果応報", english: "Cause bring result / bad causes bring bad results."},
            {japanese: "弱肉強食", english: "The weak are meat; the strong eat."},];


function getQuote() {
    var randomQuote = Math.floor(Math.random() * quotes.length);
    document.getElementById('japanese').innerHTML = quotes[randomQuote].japanese;
    document.getElementById('english').innerHTML = quotes[randomQuote].english;
}

/*AUDIO----------------------------------------------------------------------------------------------------------------*/
